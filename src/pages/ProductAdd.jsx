function ProductAdd() {
  return (
    <div>
      <h1>ProductAdd</h1>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">
            Price
          </label>
          <input type="number" class="form-control" id="price" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;
