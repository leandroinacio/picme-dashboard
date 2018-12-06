<template>
  <div>
    <!-- Table -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Country</th>
          <th scope="col">State</th>
          <th scope="col">City</th>
          <th scope="col">Reference 1</th>
          <th scope="col">Reference 2</th>
          <th scope="col">Date Created</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>
            <i class="fas fa-edit"></i>
          </td>
          <td>
            <i class="fas fa-trash-alt"></i>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- /Table -->
    <!-- Pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">Previous</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
    <!-- /Pagination -->
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  }
};
</script>
