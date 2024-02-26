
<section >
    <div class="container mt-30 mb-30 pt-30 pb-30">
        <div class="row"><input type="button" class="btn btn-warning btn-sm" onclick="printDiv('printableArea')" value="Download Publications" />
        </div></div></section>
        <style type="text/css" media="print">
  @page { size: landscape; }
</style>
<section id="printableArea">
    <div class="container mt-30 mb-30 pt-30 pb-30">
        <div class="row">
            <div class="col-md-12 blog-pull-right">
                <h3 class="text-theme-colored mt-0"><?=$parentMenu.' '.$page_title;?></h3>
                <?php if($publications) { ?>
                <div class="section-content">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 text-left sm-text-center table-responsive">
                            <table class="table table-bordered">
                                <tr class="bg-info">
                                    <th>Year</th>
                                    <th class='text-center'>National Journals</th>
                                    <th class='text-center'>International Journals</th>
                                    <th class='text-center'>National Conferences</th>
                                    <th class='text-center'>International Conferences</th>
                                </tr>
                                <?php
                                foreach($publicationsStats as $key => $value){
                                    $p1 = array_key_exists(1,$value) ? $value[1] : '-';
                                    $p2 = array_key_exists(2,$value) ? $value[2] : '-';
                                    $p3 = array_key_exists(3,$value) ? $value[3] : '-';
                                    $p4 = array_key_exists(4,$value) ? $value[4] : '-';
                                    echo "<tr>";
                                    echo "<td>".$key."</td>";
                                    echo "<td class='text-center'>".$p1."</td>";
                                    echo "<td class='text-center'>".$p2."</td>";
                                    echo "<td class='text-center'>".$p3."</td>";
                                    echo "<td class='text-center'>".$p4."</td>";
                                    echo "</tr>";
                                }
                            ?>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="section-content">
                    <div class="row multi-row-clearfix">
                        <div class="col-sm-12 col-md-12 text-left sm-text-center table-responsive">
                            <table class="table">
                                <tr>
                                    <th width="5%">S.No</th>
                                    <th width="12%">Year</th>
                                    <th width="13%">Type</th>
                                    <th width="70%">Publication Details</th>
                                </tr>
                                <?php  $i = ($page) ? $page + 1 : 1;
                            foreach($publications as $publications1){
                                if($publications1->link){
                                   $link = anchor($publications1->link,'<i class="fa fa-link"></i> Reference Link','class="text-danger"  target="_blank"');
						        }else {
							       $link = null;
						        }	
                            ?>
                                <tr>
                                    <td><?=$i++;?>.</td>
                                    <td><?=$publications1->academic_year;?></td>
                                    <td><?=$publicationTypes[$publications1->publication_type];?></td>
                                    <td class="text-justify">
                                        <?php
                                            echo $publications1->details;
                                            echo $link;
                                        ?>
                                    </td>
                                </tr>
                                <?php  } ?>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 text-center">
                                <nav>
                                    <ul class="pagination theme-colored xs-pull-center mb-xs-40">
                                        <?php echo $links;?>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <?php } else { ?>
                <div class="text-center mt-50">
                    <!--<img src="<?=base_url();?>assets/departments/avatar.jpg" alt="Dr.AIT"-->
                    <!--    class="img-fluid img-thumbnail">-->
                    <h4 class="text-gray">Publications not yet created...!</h4>
                </div>
                <?php } ?>
            </div>
           
        </div>
    </div>
</section>

<script>
function printDiv(divId) {
     var printContents = document.getElementById(divId).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}
</script>