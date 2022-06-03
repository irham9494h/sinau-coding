<script setup></script>

<template>
  <div class="d-flex justify-content-between">
    <h3>Daftar Pengguna</h3>
    <button class="btn btn-primary btn-sm">Buat Pengguna</button>
  </div>

  <div class="card mt-3">
    <div class="card-body">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>mark@mail.com</td>
            <td>Male</td>
            <td>Active</td>
            <td width="120px">
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="btn btn-secondary">
                  <i class="fa fa-eye"></i>
                </button>
                <button type="button" class="btn btn-warning">
                  <i class="fa fa-edit"></i>
                </button>
                <button type="button" class="btn btn-danger">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Robert</td>
            <td>robert@mail.com</td>
            <td>Male</td>
            <td>Inactive</td>
            <td width="120px">
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="btn btn-secondary">
                  <i class="fa fa-eye"></i>
                </button>
                <button type="button" class="btn btn-warning">
                  <i class="fa fa-edit"></i>
                </button>
                <button type="button" class="btn btn-danger">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Ana</td>
            <td>ana@mail.com</td>
            <td>Fimale</td>
            <td>Active</td>
            <td width="120px">
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" class="btn btn-secondary">
                  <i class="fa fa-eye"></i>
                </button>
                <button type="button" class="btn btn-warning">
                  <i class="fa fa-edit"></i>
                </button>
                <button type="button" class="btn btn-danger">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
