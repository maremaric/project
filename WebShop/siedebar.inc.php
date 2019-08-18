<?php

    require_once "./category.class.php";

    $c = new category();
    $categories = $c->all();


?>    


<h2 class="my-5">Categories</h2>

<div class="list-group">

<?php foreach($categories as $category) { ?>

    <a href="./products.php?cat_id=<?php echo $category->id; ?>" 
        class="list-group-item list-group-item-action d-flex
        justify-content-between align-items-center">
            <?php echo $category->title; ?>
        <span class="badge badge-primary badge-pill"><?php echo $category->num_of_products; ?></span>
    </a>    

<?php  } ?>

</div>