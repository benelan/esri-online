import React from 'react'

// Passed an array of User[]
// (the type is available from @speedingplanet/rest-server)
// Render a table
// Bootstrap has a set of nice table classes
// Columns are displayName, city, state
// One row for each user
// What should the key be? (there's an id, lastUpdated, version, payeeId....)

/*
<table>
<thead>
<tr>
<th>...</th>
</tr>
</thead>
<tbody>
  <tr>
    <td>....</td>
  </tr>
</tbody>
</table>

*/


const UsersGrid = () => {
  return (
    <table className="table table-striped table-hover"></table>
  )
}

export default UsersGrid
