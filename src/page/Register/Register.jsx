import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Register = () => {
    const {createUser,updateUserProfile,user,setUser,loading} = useAuth();
	const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state || "/";



    const handleSubmit = async e =>{
        e.preventDefault();
        const form = e.target;
        const username= form.username.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name,email,photo,password);
       try{
        const result = await createUser(email,password)

		await  updateUserProfile(name,photo)
		setUser({...result?.user, displayName:name, photoURL:photo})
		

		navigate(from)
		return toast.success('Register Successfull')
                
                
       }
       catch(err){
        console.log(err);
         return toast.error(err?.message)
        
       }


    }

    return (
        <div className="w-full bg-[url('login.jpg')] bg-cover bg-center flex justify-center items-center">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
	<h1 className="text-2xl font-bold text-center text-[#222222]">Login</h1>
	<form noValidate="" action="" className="space-y-6" onSubmit={handleSubmit}>
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block dark:text-gray-600">Username</label>
			<input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="useremail" className="block dark:text-gray-600">Email</label>
			<input type="email" name="email" id="email" placeholder="User Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="photo" className="block dark:text-gray-600">Photo</label>
			<input type="text" name="photo" id="photo" placeholder="Photo" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block dark:text-gray-600">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<button className="block w-full p-3 text-center rounded-sm bg-[#aeffde]">Register</button>
	</form>
	<p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account?
    <Link to="/login" rel="noopener noreferrer" className="hover:underline text-[#222222] font-medium">Login</Link>
	</p>
</div>
        </div>
    );
};

export default Register;