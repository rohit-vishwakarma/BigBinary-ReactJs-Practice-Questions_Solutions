import { useState, useEffect } from "react";
import axios from "axios";
/**
 * Ques - 8.
 * Implement a sort and filter functionality
 * which satisfies the following conditions:
 *
 * FOR SORT:
 * 1. The data is unsorted on page load
 * 2. Clicking on a column header sorts
 *      that column in an ascending manner.
 * 3. Clicking the same column header again
 *      sorts that column in the descending order.
 * 4. Clicking the same column header again
 *      for the third time resorts it in an
 *      ascending manner. That is, the data is
 *       unsorted only on page load.
 * 5. The table should remember how each column
 *      is sorted. For example: Clicking on "First Name"
 *      should sort the data according to the
 *      first name in an ascending manner. Then
 *      clicking on "City" should sort the data
 *      _*only on*_ "City" in an ascending fashion.
 *      However, reclicking on "First Name" should
 *      sort the table on First Name in the
 *      descending order.
 *
 * FOR FILTER:
 * 1. When the user writes anything in the
 * input field, the table should only contain
 * rows which have the string in any of the columns.
 *
 * 2. Filtering is case in sensitive.
 *
 *
 */

export function DisplayTabularData3() {
  const [users, setUsers] = useState({data : null});
  const [sortingOrder, setOrder] = useState(new Array(8).fill(0)); // 8 rows to check sorting order
  const [searchText, setSearchText] = useState(""); 
  const [loading, setLoad] = useState(true);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((res) => {
        const data = res.data.results.map(
          ({ name, location, login, phone }) => [
            name.first,
            location.city,
            location.state,
            location.country,
            login.username,
            phone,
            location.coordinates.latitude,
            location.coordinates.longitude,
          ]
        );
        setUsers({data: data});
        setLoad(false);
      })
      .catch((e) => {
        console.log(e.message);
      });
  },[]);

  const handleSort = (idx) => {
    // console.log(idx);
    let data = users.data;
    if (sortingOrder[idx] <= 0 || sortingOrder[idx] == 1) { //ascending order sorting
      data.sort((a, b) => {
        if (a[idx] < b[idx]) return -1;
        if (a[idx] > b[idx]) return 1;
        return 0;
      });
      sortingOrder[idx] = 2;
    } else {       // descending order sorting
      data.sort((a, b) => {
        if (a[idx] < b[idx]) return 1;
        if (a[idx] > b[idx]) return -1;
        return 0;
      });
      sortingOrder[idx] = 1;
    }

    setUsers({data}); //updating the data in users
    setOrder(sortingOrder); //updating sortingorder
    // console.log(data);
  };

  const tableDataFilter = (data, text) => {
    //filtering table data where in each row finding any string in lowercase is have the searching text
    if (text === null || text === undefined) return data;
    return data.filter((row) => {
      //   console.log(data);
      return row.some((s) => `${s}`.toLowerCase().includes(text));
    });
  };

  console.log(loading);

  console.log("rendering again");
  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort(0)}>First name</th>
            <th onClick={() => handleSort(1)}>City</th>
            <th onClick={() => handleSort(2)}>State</th>
            <th onClick={() => handleSort(3)}>Country</th>
            <th onClick={() => handleSort(4)}>Username</th>
            <th onClick={() => handleSort(5)}>Phone</th>
            <th onClick={() => handleSort(6)}>Latitude</th>
            <th onClick={() => handleSort(7)}>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {/* {console.log(state)} */}
          {tableDataFilter(users.data, searchText).map((row, idx) => {
            return (
              <tr key={idx}> 
                {row.map((val, ridx) => (  //mapping all the element of row in td tag 
                  <td key={`${idx}-${ridx}`}>{val}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
