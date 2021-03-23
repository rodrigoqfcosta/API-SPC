import  swal  from 'sweetalert2';

const aMessage = (type, title, text, footer, content) => {
    var x = swal.fire({
        icon    : type,
        title   : title,
        html    : text,
        footer  : footer,
        customClass: {
            content: content
        }
    })

    return x;
}

const aMessageAwait = async (title, message) => {
    return swal.fire({
        title: title,
        text: message,
        showLoaderOnConfirm: true,

        onOpen: () => swal.showLoading()
    })
}

const aMessageClose = (_swal, ...swalp) => {
    _swal = swal.fire({
        icon    : swalp[0],
        title   : swalp[1],
        text    : swalp[2],
        footer  : swalp[3],
         onOpen: () => {
            swal.hideLoading();
         }
     })

}

export {
    aMessage,
    aMessageAwait,
    aMessageClose,
}

