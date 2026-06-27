import { useAuth } from "../context/AuthContext";

export default function profile() {
    const { user, isLoading } = useAuth();
    const plan = false;

        if (!user && !isLoading) {
      return <Navigate to="/auth/sign-in" replace />
    }
        if (!plan) {
     return <Navigate to="/onboarding" replace />
    }


    return 

    <div>Profile page</div>

}