$(document).ready(function(){
    $.validator.setDefaults({
        errorClass:"error",
        highlight: function(element){
            $(element)
            .closest('.form-control')
            .addClass('has-error');
        },
        unhighlight: function(element){
            $(element)
            .closest('.form-control')
            .removeClass('has-error');
        }
    })
    var $delaerData = $("#delaerData");
    if($delaerData.length){
        $delaerData.validate({
            rules:{
                dealerNumber:{
                    required:true,
                    maxlength: 9,
                    digits: true

                },
                startDate:{
                    required:true,

                },
                endDate:{
                    required:true,

                },
                declType:{
                    required:true,

                },
                declFor:{
                    required:true,

                }
            },
            messages:{
                dealerNumber:{
                    required:"يجب ادخال رقم المتعامل لبدء البحث",
                    maxlength:"الرقم لا يزيد عن 9 ارقام",
                    digits: "الحقل يقبل ارقام فقط"

                },
                startDate:{
                    required:"من فضلك اختر تاريخ بداية الفترة"
                },
                endDate:{
                    required:"من فضلك اختر تاريخ نهاية الفترة"

                },
                declType:{
                    required:"من فضلك اختر   نوع البيان"

                },
                declFor:{
                    required:"من فضلك اختر   الجهة الموجه لها  البيان"

                }
            }
        })
    } 
  });
  