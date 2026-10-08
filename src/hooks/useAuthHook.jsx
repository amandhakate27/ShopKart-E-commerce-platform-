import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

const useAuthHook = () => {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({ mode: 'onChange' });
    const { registeredUsers, setRegisteredUsers, setLoggedInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const passwordValue = watch('password') || ''; // watch the password
    const [showPassword, setShowPassword] = useState(false); // visibility toggle
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // stength password validation function 
    const getPasswordStrength = (pass) => {
        let score = 0;
        if (!pass) return score;
        if (pass.length >= 6) score++;
        if (pass.length >= 8 && /[A-Z]/.test(pass) && /[0-9]/.test(pass)) score++;
        if (pass.length >= 10 || /[^A-Za-z0-9]/.test(pass)) score++;
        return score;
    }
    const strengthScore = getPasswordStrength(passwordValue);

    // text and color mapping based on strength score
    const strengthLevels = [
        { text: 'Strength', color: 'bg-neutral-200', textColor: 'text-neutral-400' },
        { text: 'Weak', color: 'bg-red-500', textColor: 'text-red-500' },
        { text: 'Medium', color: 'bg-orange-500', textColor: 'text-orange-500' },
        { text: 'Strong', color: 'bg-green-500', textColor: 'text-green-500' },
    ]
    const strengthInfo = strengthLevels[strengthScore] || strengthLevels[0];

    // Function to handle registration submission
    const handleRegisterSubmit = (data) => {
        let userExist = registeredUsers.find((user) => user.email.trim().toLowerCase() === data.email.trim().toLowerCase());
        if (userExist) {
            toast.error('Email already exists. Please try another email.');
            return;
        }
        let arr = [...registeredUsers, data];
        setRegisteredUsers(arr);
        localStorage.setItem('registeredUsers', JSON.stringify(arr));
        toast.success('Registration successful! Please login.');
        navigate('/');
        reset();
    }


    const handleLoginSubmit = (data) => {

        let isUserRegistered = registeredUsers.find((user) => user.email === data.email && user.password === data.password);
        if (!isUserRegistered) {
            return toast.error("Unauthorized User, Please register before login")
        }
        setLoggedInUser(isUserRegistered);
        localStorage.setItem("loggedInUser", JSON.stringify(isUserRegistered))
        navigate("/main");
        toast.success("Welcome!")
    }




    return {
        register,
        handleSubmit,
        errors,
        reset,
        handleRegisterSubmit,
        handleLoginSubmit,
        passwordValue,
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword,
        strengthScore,
        strengthInfo,
        navigate
    }
}

export default useAuthHook