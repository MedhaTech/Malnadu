<main id="main-container">
    <div class="content">
        <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary"><?=$pageTitle;?></h6>
            </div>
            <div class="card-body">
                <?php echo form_open($action, 'class="user"'); ?>
                <div class="row">
                    <div class="col-md-8 offset-2">
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label for="name">Staff Name:</label>
                                <input type="text" name="name" id="name"
                                    class="form-control form-control-sm"
                                    value="<?php echo (set_value('name'))?set_value('name'):$Staff->name;?>">
                                <?php echo form_error('name', '<div class="error">', '</div>'); ?>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="designation">Designation:</label>
                                <input type="text" name="designation" id="designation"
                                    class="form-control form-control-sm"
                                    value="<?php echo (set_value('designation'))?set_value('designation'):$Staff->designation;?>">
                                <?php echo form_error('designation', '<div class="error">', '</div>'); ?>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="experience">Department:</label>
                                <input type="text" name="department" id="department" class="form-control form-control-sm"
                                    value="<?php echo (set_value('department'))?set_value('department'):$Staff->department
                                    ;?>">
                                <?php echo form_error('department', '<div class="error">', '</div>'); ?>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-sm-2"> &nbsp;</div>
                    <div class="col-sm-10">
                        <button type="submit" class="btn btn-danger btn-sm" name="Update" id="Update"><i
                                class="fas fa-edit"></i> Update</button>
                        <?php echo anchor('dept/staff','<i class="fas fa-arrow-left fa-sm fa-fw"></i> Cancel', 'class="btn btn-dark btn-sm" '); ?>
                    </div>
                </div>

                </form>
            </div>
        </div>
    </div>
</main>