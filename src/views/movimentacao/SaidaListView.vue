<template>
  <div class="condutor">
    <button type="button" class="btn btn-success mt-4">Registrar entrada</button>
    <table class="table mt-4">
  <thead>
    <tr>
      <th scope="col">Placa</th>
      <th scope="col">Condutor</th>
      <th scope="col">Hora entrada</th>
      <th scope="col">Opcoes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td><button type="button" class="btn btn-secondary btn-color "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg></button><button type="button" class="btn btn-secondary btn-color2 ms-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg></button></td>
    </tr>

  </tbody>
</table>
  </div>
</template>

<style lang="scss"> 
.btn-color{
  background-color: green;
  border-color: green;
  
}
.btn-color:hover {
  background-color: darkgreen;
  border-color: darkgreen;
}
.btn-color2{
  background-color: rgb(255, 0, 0);
  border-color:  rgb(255, 0, 0);
  
}
.btn-color2:hover {
  background-color: darkred;
  border-color: darkred;
}
</style>

<script lang="ts"></script>
