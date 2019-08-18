<?php 

    require_once './admin_only.php';

    require_once "./category.class.php";
    require_once './Helper.class.php';
    
    if ( isset($_POST["btn_addCategory"]) ) {
        $newCategory = new Category();
        $newCategory->title = $_POST["category_title"];
       if( $newCategory->insert() ) {
           Helper::addMessage('Category created successfully.');
       }
    }

    if ( isset($_POST["btn_deleteCategory"]) ) {
        $categoryToDelete = new Category($_POST["category_id"]);
        if( $categoryToDelete->delete() ) {
            Helper::addMessage('Category deleted successfully.');
        }
    }

    $c = new Category();
    $categories = $c->all();

?>

<?php include "./header.layout.php"; ?>

<h1 class="mt-5">Add new category</h1>

    <form action="" method="post">
        <div class="form-row">

            <div class="col-md-8 mb-3">
                <label for="inputTitle">Title</label>
                <input type="text" name="category_title" class="form-control"
                id="inputTitle" placeholder="Category title" required>
            </div>

            <div class="col-md-4 mb-3 d-flex justify-content-center
                align-items-end">
                <button class="btn btn-primary btn-block" name ="btn_addCategory">Add Category</button>
            </div>
        </div>
    </form>                 

<h2 class="mt-5">Manage existing categories</h2>

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>

  <?php foreach($categories as $category) { ?>

    <tr>
      <th><?php echo $category->id; ?></th>
      <td><?php echo $category->title; ?></td>
      <td>
        <form action="" method="post">
            <input type="hidden" name="category_id" value="<?php echo $category->id; ?>" />           
            <button class="btn btn-danger btn-sm"
             name="btn_deleteCategory">Delete</button>
        </form>      
      </td>
    </tr>

    <?php } ?>
   
  </tbody>
</table>

<?php include "./footer.layout.php"; ?>