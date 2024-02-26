<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha512-ANkGm5vSmtDaoFA/NB1nVJzOKOiI4a/9GipFtkpMG8Rg2Bz8R1GFf5kfL0+z0lcv2X/KZRugwrAlVTAgmxgvIg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.9/summernote-bs4.js"></script>
<main id="main-container">
    <div class="content">
        <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary"><?=$pageTitle;?></h6>
            </div>
            <div class="card-body">
                <?php echo form_open($action, 'class="user"  enctype="multipart/form-data"'); ?>

                <div class="form-group mx-5">
                    <label for="title">Title</label>
                    <input type="text" class=" form-control form-control-sm" id="news_title" name="news_title"
                        placeholder="Add news title here.."
                        value="<?php echo (set_value('news_title'))?set_value('news_title'):'';?>">
                    <span class="text-danger"><?php echo form_error('news_title'); ?></span>
                </div>

                <div class="form-group mx-5">
                    <label for="details">Details</label>
                    <textarea id="news_details" name="news_details" class="rich form-control" rows="6"
                        placeholder="news details will type here..."><?php echo (set_value('news_details'))?set_value('news_details'):'';?></textarea>
                    <span class="text-danger"><?php echo form_error('news_details'); ?></span>
                    <!-- <input name="image" type="file" id="upload" class="d-none" onchange=""> -->
                    <script id="rendered-js">
                        $('textarea#news_details').summernote({
                            placeholder: '',
                            tabsize: 2,
                            height: 250,
                            toolbar: [
                                // ['style', ['style']],
                                ['style', ['bold', 'italic', 'underline', 'clear']],
                                ['font', ['strikethrough', 'superscript', 'subscript']],
                                // ['table', ['table']],
                                ['color', ['color']],
                                ['para', ['ul', 'ol', 'paragraph']],
                                ['insert', ['link', 'picture']],
                              
                            ]
                        });
                        $('.dropdown-toggle').dropdown();
                    </script>
                </div>
                <div class="row  mx-5">
                    <div class="form-group col-md-6">
                        <label for="news_display">Select Attachments: (Max: 20MB) </label>
                        <input type='file' name='files[]' multiple="">
                        <span class="text-danger"><?php echo form_error('files'); ?></span>
                    </div>

                    <div class="form-group mx-5 col-md-3">
                        <label for="title">Add to scroll news?</label>
                        <input type="checkbox" class="" id="new_label" name="new_label" placeholder="sort_order here.." value="<?php echo (set_value('new_label')) ? set_value('new_label') : ''; ?>">
                        <span class="text-danger"><?php echo form_error('new_label'); ?></span>
                    </div>

                   
                </div>
           

                <div class="form-group mx-5">
                    <button type="submit" class="btn btn-danger btn-sm" name="Update" id="Update"><i
                            class="fas fa-edit"></i> Create </button>
                    <?php echo anchor('dept/latestNews','<i class="fas fa-arrow-left fa-sm fa-fw"></i> Cancel', 'class="btn btn-info btn-sm" '); ?>
                </div>

                </form>
            </div>
        </div>
    </div>
</main>