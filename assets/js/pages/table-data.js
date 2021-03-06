
$(document).ready(function() {
    $('#example').DataTable({
       
        language: {
            "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                sFirst: '<i class="material-icons">chevron_left</i>',
                sPrevious: '<i class="material-icons">chevron_left</i>',
                sNext: '<i class="material-icons">chevron_right</i>',
                sLast: '<i class="material-icons">chevron_right</i>' 
                },
			     "sProcessing":"Procesando...",
        },        
    });
    $('.dataTables_length select').addClass('browser-default');
});

$(document).ready(function() {
    $('#examplee').DataTable({
       
        language: {
            "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                sFirst: '<i class="material-icons">chevron_left</i>',
                sPrevious: '<i class="material-icons">chevron_left</i>',
                sNext: '<i class="material-icons">chevron_right</i>',
                sLast: '<i class="material-icons">chevron_right</i>' 
                },
			     "sProcessing":"Procesando...",
        },        
    });
    $('.dataTables_length select').addClass('browser-default');
});


$(document).ready(function() {
    $('#example2').DataTable({
         responsive: true,
        language: {
             "lengthMenu": "Mostrar _MENU_ registros",
                "zeroRecords": "No se encontraron resultados",
                "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "sSearch": "Buscar:",
                "oPaginate": {
                sFirst: '<i class="material-icons">chevron_left</i>',
                sPrevious: '<i class="material-icons">chevron_left</i>',
                sNext: '<i class="material-icons">chevron_right</i>',
                sLast: '<i class="material-icons">chevron_right</i>' 
                },
			     "sProcessing":"Procesando...",
        }, 
  
        //para usar los botones   
        responsive: "true",
        dom: 'Bfrtilp',       
        buttons:[ 
			{
				extend:    'excelHtml5',
				text:      '<i class="fas fa-file-excel"></i> ',
				titleAttr: 'Exportar a Excel',
                className: 'btn btn-warning',
                exportOptions: {
                columns: ':visible'
				 }
			},
			{
				extend:    'pdfHtml5',
                background: 'simple text',
				text:      '<i class="fas fa-file-pdf"></i> ',
				titleAttr: 'Exportar a PDF',
                orientation: 'landscape',
                pageSize: 'A4',
                download: 'open',
				className: 'responsive-table btn',
       customize: function ( doc ) {
            
                    doc.content.splice( 1, 0, {
                        margin: [ 0, 0, 0, 12],
                        alignment: 'left',
                                                image: 'data:image/png;base64,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',      fit: [50,60]


                        
                    });},
                
                exportOptions: {
                columns: ':visible'
				 }
			},
			//{
				//extend:    'print',
				//text:      '<i class="fa fa-print"></i> ',
                //className: 'responsive-table btn',
                  // customize: function ( win ) {
                    //$(win.document.body)
                      //  .css( 'font-size', '10pt' )
                       // .prepend(
                         //   '<img src="http://localhost:8080/sim1.2/assets/images/f1.png" style="position:absolute; top:0; left:0;" />'
                //        );
 
                //    $(win.document.body).find( 'table' )
                  //      .addClass( 'compact' )
                    //    .css( 'font-size', 'inherit' );
                //},
                //exportOptions: {
              //  columns: ':visible'
			//	 }
                
            
			//},
            'colvis'
		],
        columnDefs: [ {
            visible: false
        } ]
        
    });
    $('.dataTables_length select').addClass('browser-default');
});