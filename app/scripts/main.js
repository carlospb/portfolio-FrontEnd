// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

const App = {
  loginStatus:    false,
  btnLoginLogout: null,
  modalLogin:     null,

  init: function() {
    console.log("Init...");
    this.btnLoginLogout = document.getElementById('btnLoginLogout'),
    this.modalLogin     = new bootstrap.Modal('#modalSignin', {
      keyboard: false
    });

    /*
    document.getElementById('btnFormLogin').addEventListener('click', function(event) {
      event.preventDefault();

    });*/
    let form = document.getElementById('formLogin');
    form.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {

      } else {
        // envía username y password para ser validados por la API

      }


    }, false)
  },
  checkLoginStatus: function() {
    if (this.loginStatus) {
      // está logeado debemos realizar el logout!!!
      App.btnLoginLogout.innerText = 'Login';
      this.loginStatus             = false;
    } else {
      App.modalLogin.show();


      App.btnLoginLogout.innerText='Logout';
      App.btnLoginLogout.classList.add('btn-logout')
      App.loginStatus=true;


    }
  }
};


// App Init
App.init();
