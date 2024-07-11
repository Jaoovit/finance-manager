import { useSelector } from "react-redux"


const Home = () => {

    const info = useSelector((state) => state.info)
    console.log(info)

  return (
    <div className="container">
        <h2>Finance Manager</h2>
        <button className="btn btn-success my-3">Add a new money flow</button>
        <table className="table">
            <thead>
                <tr>
                    <th>Money flow</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {info.map((info, index) => (
                    <tr key={index}>
                        <td>{info.info}</td>
                        <td>{info.state === "positive" ? "+ " + info.quantity : "- " + info.quantity}</td>
                        <td>
                            <button className="btn btn-sm btn-primary">edit</button>
                            <button className="btn btn-sm btn-danger ms-2">delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home
