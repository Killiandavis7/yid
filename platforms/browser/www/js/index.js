  document.addEventListener('deviceready', onDeviceReady, false);

  function onDeviceReady(){
    console.log("Device is ready..");
  }
  $(function() {
      var sel, i,
          list = ['DDSL', 'NDSL'],
          ageddsl = ['u16', 'u17', 'u18', 'u19'],
          agendsl = ['u15', 'u16', 'u17', 'u18'],
          league = ['Premier1', 'Premier2','Major'],
          league1 = ['Premier', 'Major','Major1'],
          league2 = ['Premier1','Major'],
          windows = ['8', '8.1'],
          dev_default = '<option value="default" selected>Select your Age Group</option>',
          os_default  = '<option value="default" selected>Select your League</option>';

      sel_brand = $('#brand');
      sel_version = $('#version');

      $('select').change(function() {
          switch (this.id) {

              case 'main_list':
                  $('.secondary').hide();
                  sel_brand.find('option').remove();
                  sel_brand.append(dev_default);
                  sel_brand.show();
                  if (this.value == 'DDSL') {
                      for (i = 0; i < ageddsl.length; i++) {
                          $("#brand").append(
                              '<option value="' + ageddsl[i] + '">' + ageddsl[i] + '</option><br/>'
                          );
                      }
                  }else if (this.value == 'NDSL') {
                      for (i = 0; i < ageddsl.length; i++) {
                          $("#brand").append(
                              '<option value="' + agendsl[i] + '">' + agendsl[i] + '</option>'
                          );
                      }
                  }
                  break;


              case 'brand':
                  sel_version.find('option').remove();
                  sel_version.append(os_default);
                  sel_version.show();
                  if (this.value == 'u16') {
                      for (i = 0; i < league.length; i++) {
                          $("#version").append(
                              '<option value="' + league[i] + '">' + league[i] + '</option>'
                          );
                      }
                  }else if (this.value == 'u17') {
                      for (i = 0; i < league1.length; i++) {
                          $("#version").append(
                              '<option value="' + league1[i] + '">' + league1[i] + '</option>'
                          );
                      }
                  }else if (this.value == 'u18' /*|| this.value == 'HP' || this.value == 'Dell'*/) {
                      while (i < league2.length) {
                          $("#version").append(
                              '<option value=" index.html ">' + league2[i] + '</option>'
                          );
                      }
                  }
                  break;

          }
      });

  }); //END document.ready()
