import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const authHook = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset, watch, setValue } = useForm({ mode: 'onChange' });

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

    const handleRegisterSubmit = (data) => {
        console.log('Register Data:', data)
        reset()
    }









    return {
        register,
        handleSubmit,
        errors,
        navigate,
        handleRegisterSubmit,
        passwordValue,
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword,
        strengthScore,
        strengthInfo
    }
}

export default authHook