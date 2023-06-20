<template>
<form class="d-flex flex-column align-items-center">
    <div class="mt-4 input-container">
  <label class="form-label">Hora entrada</label>
  <input class="form-control" placeholder="">
</div>
  <div class="mt-4 inputselect input-container">
    <select class="form-select" aria-label="Default select example" >
  <option selected>Veiculo</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
  <div class="mt-4 inputselect input-container">
    <select class="form-select" aria-label="Default select example">
  <option selected>Condutor</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
  <button type="submit" class="btn btn-success mt-4">Cadastrar</button>
</form>
</template>

<style lang="scss">

.input-container {
  width: 40%;
}

</style>

<script lang="ts">
</script>