import Bill from "../Bill";
import CompactProfile from "../CompactProfile";


const Governoment = () => {
    return ( 
        <div>
            <Bill />
    
    <center>
    <CompactProfile />
    <hr style={{backgroundColor: "DodgerBlue"}} />
    <CompactProfile />
    <hr style={{backgroundColor: "DodgerBlue"}} />
    <CompactProfile />
    </center>
        </div>

     );
}
 
export default Governoment;