 import "./App.css"
 function Loginsite(){
    return(
        <>
        <p>This is the login page</p>

        <div className="test1">
        <form className="modal-content">
        <label for="email"><b>Email Address</b> </label><br/>
            <input className= "valuepoints" type="text" placeholder="Email... " name="email" required/><br/>


        <label for="passwd"><b>Password</b></label>  <br/>  
            <input className= "valuepoints" type="text" placeholder="password.." name="passwd" required/><br/>
            <button type ="submit">Login</button><br/>
            <label> 
                <input type="checkbox" checked="checked"/> Remember me
            </label> 
      
    
            </form>
        </div>
        </>
    );
 }
 export default Loginsite