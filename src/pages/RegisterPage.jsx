
import { EyeOff, Eye, Mail, Lock, User, ArrowRight } from 'lucide-react';
import registerImage from '../assets/images/auth_register.jpg';
import useAuthHook from '../hooks/useAuthHook';

const RegisterUI = () => {
  const { register, handleSubmit, errors, handleRegisterSubmit, passwordValue, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword, navigate, strengthInfo, strengthScore } = useAuthHook();

  return (
    <div className="min-h-screen w-full bg-[#FBF9F9] font-body relative lg:flex lg:flex-row-reverse lg:h-screen lg:overflow-hidden">

      {/* ── Mobile Background Image ── */}
      <div className="fixed inset-0 lg:hidden pointer-events-none z-0">
        <img
          src={registerImage}
          alt="register background"
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* ── Form Side ── */}
      <div className="relative z-10 w-full lg:w-1/2 min-h-screen lg:min-h-0 lg:h-full
                    flex flex-col items-center justify-center
                    px-6 py-14 sm:px-16 md:px-24 lg:px-12 xl:px-16">

        {/* Inner container with controlled max-width for large screens */}
        <div className="w-full max-w-sm sm:max-w-md bg-white lg:bg-transparent p-6 sm:p-8 lg:p-0 border border-white/60 lg:border-none shadow-xl lg:shadow-none">

          <div className="mb-6">
            <h1 className="font-clarkson text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight text-center lg:text-left">
              Create your account
            </h1>
            <p className="text-neutral-500 text-sm mt-1.5 text-center lg:text-left">
              Join ShopKart and start shopping today
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleRegisterSubmit)}
            className="space-y-3.5">

            {/* Full Name */}
            <div>
              <label htmlFor="register-name" className="block text-xs font-semibold text-neutral-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  {...register('fullName', {
                    required: "full name is required"
                  })}
                  id="register-name"
                  type="text"
                  placeholder="John Doe"
                  autoComplete="name"
                  className={`w-full rounded-none border border-neutral-300 bg-white/90 py-3 pl-10 pr-4 text-neutral-900 text-sm placeholder-neutral-400 outline-none transition-all duration-200 ${errors.fullName ? 'focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900'} `}
                />
              </div>
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="register-email" className="block text-xs font-semibold text-neutral-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  id="register-email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  {...register('email', {
                    required: "email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "invalid email address"
                    }
                  })}
                  className={`w-full rounded-none border border-neutral-300 bg-white/90 py-3 pl-10 pr-4 text-neutral-900 text-sm placeholder-neutral-400 outline-none transition-all duration-200 ${errors.email ? 'focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900'} `}
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="register-password" className="block text-xs font-semibold text-neutral-700 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  {...register('password', {
                    required: 'password is required',
                    minLength: {
                      value: 6,
                      message: 'password must be at least 6 characters'
                    }
                  })}
                  id="register-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className={`w-full rounded-none border border-neutral-300 bg-white/90 py-3 pl-10 pr-10 text-neutral-900 text-sm placeholder-neutral-400 outline-none transition-all duration-200 ${errors.password ? 'focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900'} `}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

              {/* Strength bar placeholder structure */}
              <div className="mt-1.5 flex items-center gap-2">
                <div className="flex flex-1 gap-1">
                  <div className={`h-1 flex-1 transition-all duration-300 ${strengthScore >= 1 ? strengthInfo.color : 'bg-neutral-200'}`} />
                  <div className={`h-1 flex-1 transition-all duration-300 ${strengthScore >= 2 ? strengthInfo.color : 'bg-neutral-200'}`} />
                  <div className={`h-1 flex-1 transition-all duration-300 ${strengthScore >= 3 ? strengthInfo.color : 'bg-neutral-200'}`} />
                </div>
                <span className={`text-[11px] font-semibold min-w-[50px] text-right transition-colors duration-300 ${passwordValue ? strengthInfo.textColor : 'text-neutral-400'}`}>
                  {passwordValue ? strengthInfo.text : 'Strength'}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="register-confirm-password" className="block text-xs font-semibold text-neutral-700 mb-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value) => value === passwordValue || 'Passwords do not match'
                  })}
                  id="register-confirm-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  className={`w-full rounded-none border border-neutral-300 bg-white/90 py-3 pl-10 pr-10 text-neutral-900 text-sm placeholder-neutral-400 outline-none transition-all duration-200 ${errors.confirmPassword ? 'focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900'} `}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-none bg-neutral-900 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-black active:scale-[0.99] cursor-pointer mt-2"
            >
              <span>Create Account</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-neutral-500">
            Already have an account?{' '}
            <span onClick={() => navigate('/')}
              className="font-semibold text-neutral-900 hover:underline hover:cursor-pointer">
              Sign in
            </span>
          </p>

        </div>
      </div>

      {/* ── Image Side (desktop only) ── */}
      <div className="hidden lg:block w-1/2 h-full p-3">
        <div className="w-full h-full relative rounded-md overflow-hidden border border-neutral-200/60">
          <img
            src={registerImage}
            alt="ShopKart Register"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>

    </div>
  );
};

export default RegisterUI;