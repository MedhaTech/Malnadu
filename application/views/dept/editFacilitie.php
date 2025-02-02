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
                <div class="row">
                    <div class="col-md-8 offset-2">
                        <div class="form-row">
                            
                            <div class="form-group col-md-4">
                                <label for="academic_year">Academic Year: <span class="text-danger">*</span></label>
                                <?php 
                                    echo form_dropdown('academic_year', $academicYears, $Details->academic_year, 'class="form-control form-control-sm" id="academic_year"'); ?>
                                <?php echo form_error('academic_year', '<div class="error">', '</div>'); ?>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="details">Facilitie Details: <span class="text-danger">*</span></label>
                                <textarea name="details" id="details" cols="30" rows="6" class="form-control form-control-sm"><?php echo (set_value('details'))?set_value('details'):$Details->details;?></textarea>
                                <script id="rendered-js">
                        $('textarea#details').summernote({
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
                                <?php echo form_error('details', '<div class="error">', '</div>'); ?>
                            </div>
                            <div class="form-group col-md-12">
                                <label >Select Attachments: (Max: 30MB) </label>
                                <input type='file' name='files' class="form-control form-control-sm mb-2">
                                <span class="text-danger"><?php echo form_error('files'); ?></span>
                                <?php
                                    if($Details->file_name){
                                            $del = anchor('dept/editFacilitie1/'.$Details->id,'<i class="fa fa-times ml-2 text-danger"></i>','class=""');
                                        echo '<li>'.anchor('assets/departments/'.$short_name.'/facilities/'.$Details->file_name, $Details->file_name, 'target="_blank"').'&nbsp;'.$del.'</li>';
                                    }
                                ?>
                           </div>
                           <div class="form-group col-md-12">
                                <label>Link / URL </label>
                                <input type='text' name='url' id="url" class="form-control form-control-sm" value="<?php echo (set_value('url'))?set_value('url'):$Details->url;?>">
                                <span class="text-danger"><?php echo form_error('url'); ?></span>                                 
                            </div>

                        </div>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-sm-2"> &nbsp;</div>
                    <div class="col-sm-10">
                        <button type="submit" class="btn btn-danger btn-sm" name="Update" id="Update"><i
                                class="fas fa-edit"></i> Update </button>
                        <?php echo anchor('dept/facilities','<i class="fas fa-arrow-left fa-sm fa-fw"></i> Cancel', 'class="btn btn-dark btn-sm" '); ?>
                    </div>
                </div>

                </form>
            </div>
        </div>
    </div>
</main>