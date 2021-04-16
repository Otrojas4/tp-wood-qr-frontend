import Swal, { SweetAlertIcon } from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const showToast = (icon: string, title: string) => {
  Toast.fire({
    icon: icon as SweetAlertIcon,
    title: title as any
  })
}




export default showToast;
