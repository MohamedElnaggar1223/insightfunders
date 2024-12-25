export default function VerifyEmail() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold">Check your email</h2>
          <p className="mt-2 text-gray-600">
            We've sent you an email with a link to verify your account. Please
            check your inbox and click the link to continue.
          </p>
        </div>
      </div>
    </div>
  );
}
