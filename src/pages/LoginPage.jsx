
import { Eye, Mail, Lock, ArrowRight } from 'lucide-react';
import loginImage from '../assets/images/auth_login.png';
import useAuthHook from '../hooks/authHook';
const LoginUI = () => {
  const { navigate } = useAuthHook();
  return (
    <div className="min-h-screen w-full bg-[#FBF9F9] font-body relative lg:flex lg:h-screen lg:overflow-hidden">

      {/* ── Mobile Background Image (Visible on Mobile only) ── */}
      <div className="fixed inset-0 lg:hidden pointer-events-none z-0">
        <img
          src={loginImage}
          alt="login background"
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ── Form Side ── */}
      <div className="relative z-10 w-full lg:w-1/2 min-h-screen lg:min-h-0 lg:h-full
                    flex flex-col items-center justify-center lg:items-start
                    px-6 py-14 sm:px-16 md:px-24 lg:px-16 xl:px-24">

        {/* Form block */}
        <div className="w-full max-w-sm sm:maxa-w-md bg-white lg:bg-transparent p-6 sm:p-8 lg:p-0 border border-white/60 lg:border-none shadow-xl lg:shadow-none">

          <div className="mb-7">
            <h1 className="font-clarkson text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight text-center lg:text-left">
              Sign in to your account
            </h1>
            <p className="text-neutral-500 text-sm mt-2 text-center lg:text-left">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form className="space-y-4">

            {/* Email */}
            <div>
              <label htmlFor="login-email" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full rounded-none border border-neutral-300 bg-white/90 py-3 pl-10 pr-4 text-neutral-900 text-sm placeholder-neutral-400 outline-none transition-all duration-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="login-password" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  id="login-password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full rounded-none border border-neutral-300 bg-white/90 py-3 pl-10 pr-10 text-neutral-900 text-sm placeholder-neutral-400 outline-none transition-all duration-200 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900"
                />
                <button
                  type="button"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-none bg-neutral-900 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-black active:scale-[0.99] cursor-pointer mt-2"
            >
              <span>Sign in</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-neutral-500">
            Don't have an account?{' '}
            <span
              onClick={() => navigate('/register')}
              className="font-semibold text-neutral-900 hover:underline hover:cursor-pointer">
              Sign up
            </span>
          </p>

        </div>
      </div>

      {/* ── Image Side (desktop only) ── */}
      <div className="hidden lg:block w-1/2 h-full p-3">
        <div className="w-full h-full relative rounded-md overflow-hidden border border-neutral-200/60">
          <img
            src={loginImage}
            alt="ShopKart Login"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>

    </div>
  );
};

export default LoginUI;
