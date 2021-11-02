import dot from "../assets/dot.png";
import facebook from "../assets/facebook.png";
import { Table } from "react-bootstrap";
const LatestPost = () => {
  return (
    <Table bordered hover className="posttable">
      <thead>
        <tr>
          <th>SNo</th>
          <th>Post</th>
          <th>Post Status</th>
          <th>Date</th>
          <th>Time</th>
          <th>Likes</th>
          <th>Comment</th>
          <th>Reach</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td className="w-100 d-flex">
            <img
              src={facebook}
              alt="post"
              style={{ height: "4em" }}
              className="rounded shadow mx-1"
            />
            <p className="mx-2 para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              tenetur architecto aut.
            </p>
          </td>
          <td>posted</td>
          <td>30/10/2021</td>
          <td>12:00</td>
          <td>429</td>
          <td>555</td>
          <td>1000</td>
          <td>
            <img src={dot} alt="more" style={{ height: "1em" }} />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td className="w-100 d-flex ">
            <img
              src={facebook}
              alt="post"
              style={{ height: "4em" }}
              className="rounded shadow mx-1"
            />
            <p className="mx-2 para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              tenetur architecto aut.
            </p>
          </td>
          <td>posted</td>
          <td>30/10/2021</td>
          <td>12:00</td>
          <td>429</td>
          <td>555</td>
          <td>1000</td>
          <td>
            <img src={dot} alt="more" style={{ height: "1em" }} />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default LatestPost;
