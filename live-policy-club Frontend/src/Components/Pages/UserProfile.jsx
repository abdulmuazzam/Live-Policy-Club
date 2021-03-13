import CreateBill from "../CreateBill";
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';

const UserProfile = () => {
    return ( 
       <div style={{margin: "0%"}} >
            <div className="row" style={{border: "1px solid transparent",  margin: "0%"}}>
            
            <div className="col-md-2"></div>
            <div className="col-md-4" style={{border: "1px solid transparent"}}>

                <table style={{border: "1px solid transparent", width: "100%"}} >
                    <tbody>
                        <tr >
                            <td style={{border: "1px solid transparent", padding: "0em"}}>            
                            <img  src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" 
                            alt="Profile Pic" width="200em" height="200em" />
                            </td>
                            
                            <td>
                                <table style={{border: "1px solid transparent", margin: "0%", width: "100%"}}>
                                    <tbody>
                                        <tr>
                                            <th><i>Name: </i></th>
                                            <td><i>Abdul Mauzzam</i></td>
                                        </tr>
                                        <tr>
                                        <th><i>Rank:</i> </th>
                                            <td> <i>King</i></td>
                                        </tr>
                                        <tr>
                                        <th><i>Bio Line:</i> </th>
                                            <td> <i>abc</i></td>
                                        </tr>
                                        <tr>
                                        <th>Party: </th>
                                            <td>Legends</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className="col-md-4">
                <div style={{border: "1px solid pink", borderRadius: "50px", backgroundColor: "pink"}} >
                    <b><i>
                    Vote: ###
                        </i></b>
                </div>
                <br/>
                <button className="btn btn-primary" style={{border: "1px solid black",fontSize: "24pt" , borderRadius: "70px", backgroundColor: "green", width:"100%", height:"70%"}}>
                    <b>Claim</b>
                </button>
                
            </div>
            <div className="col-md-2"></div>
        </div>
        <br/>

        <div className="row" style={{margin: "0px"}}  >
<div className="col-md-1"></div>
       <div className="col-md-10" style={{border: "1px solid blue",borderRadius: "50px", backgroundColor: "white", width: "100%", padding: "1%", margin: "0px"}}>
       

<center>
<div className="row" style={{border: "1px solid pink", borderRadius: "50px", backgroundColor: "pink", width: "80%"}} >

<div className="col-md-11">
    <center>
        <i>
        <b>Bills</b>
        </i>
    </center>
</div>
<div className="col-md-1">
<button className="btn" ><AddCircleOutlineTwoToneIcon /></button>
</div>

</div>
<br/>

<CreateBill />


</center>

</div>
       
            <div className="col-md-1"></div>
        </div>


        
       </div>


     );
}
 
export default UserProfile;