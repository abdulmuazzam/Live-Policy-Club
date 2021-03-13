


const About = () => {
    return ( 

        <div>
            <h2 className="font-style">&nbsp;&nbsp;About Us</h2>
            <br/>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <table className="table table-striped table-hover table-bordered table-responsive" >
                <thead className="thead-dark" >
                    <tr className="font-style">
                        <th>Vote</th>
                        <th colSpan="3" style={{textAlign: "center"}}>Division</th>
                    </tr>
                    
                </thead>
                <thead className="thead-light">
                <tr>
                        <th>Price</th>
                        <th>Bill Execution</th>
                        <th>Salary per Electorate</th>
                        <th>Govvor Service Fee</th>
                    </tr>
                </thead>
                    <tr>
                        <td>4.99 US Dollars</td>
                        <td>60%</td>
                        <td>20%</td>
                        <td>20%</td>
                    </tr>
                <tbody>

                </tbody>

            </table>
                </div>
                <div className="col-md-4"></div>
            </div>

        </div>

     );
}
 
export default About;