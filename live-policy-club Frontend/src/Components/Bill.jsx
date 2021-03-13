import { Button } from "react-bootstrap";

const Bill = () => {
    return ( 

        <center>
        <div style={{border: "1px solid DodgerBlue", borderRadius: "80px", width: "40%", padding: "1%", }}>

<div className="row" style={{margin: "5px"}} >

<div className="col-md-9"  style={{textAlign: "left"}} >

<h1 style={{color: "#660066"}} className="font-style"><i>Bill Name</i></h1>
<h3><i>Bill Number</i></h3>
<p>Bill Description</p>

</div>
<div className="col-md-3" style={{textAlign: "center"}}>

<table>
    <tbody>
        <tr>
            <td>
            <img  src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="Profile Pic" width="80em" height="80em" />
            </td>
        </tr>
        <tr>
            <td>
                <small>Name</small>
            </td>
        </tr>
        <tr>
            <td>
                <small>Rank</small>
            </td>
        </tr>
    </tbody>
</table>

</div>

</div>
<hr/>

{/* <table className="table " >
    <tbody  >
        <tr>
            <th>  <Button variant="primary" style={{marginRight: "10%", marginLeft: "10%"}} >Vote</Button>{' '} </th>
            <th> <Button variant="primary" style={{marginRight: "10%", marginLeft: "10%"}} >Share</Button>{' '}  </th>
            <th>  <Button variant="primary" style={{marginRight: "10%", marginLeft: "10%"}} >Claim</Button>{' '} </th>
        </tr>
    </tbody>
</table> */}

<div className="row">
    <div className="col-md-4"><Button variant="primary">Vote</Button>{' '}</div>
    <div className="col-md-4"><Button variant="primary">Share</Button>{' '}</div>
    <div className="col-md-4"><Button variant="primary">Claim</Button>{' '}</div>
</div>


        </div>
        </center>

     );
}
 
export default Bill;