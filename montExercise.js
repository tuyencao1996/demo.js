
function taskList() {
    const keyLocalStorange = 'k_t_l'
    const task = localStorage.getItem(keyLocalStorange) ? JSON.parse(localStorage.getItem(keyLocalStorange)) : []
    const eleInputId = document.querySelector('.js-input-id')
    const eleInputName = document.querySelector('.js-input-name')
    const eleInputBirthDay = document.querySelector('.js-input-birtday')
    const eleInputPhoneNumber = document.querySelector('.js-input-phone')
    const eleInputBtn = document.querySelector('.js-btn')
    const eleHandleTask2Right = document.querySelector('.js-handle-task2')

    let myIsDone = {
        isDone: false
    }

    function valueTaskLeft() {
        allValue = {
            id: eleInputId.value,
            name: eleInputName.value,
            birthday: eleInputBirthDay.value,
            phoneNumber: eleInputPhoneNumber.value,
            edit: new Date().getTime(),
        }

        let featurId = allValue.id
        let featurName = allValue.name
        let featureBirt = new Date().getFullYear() - new Date(allValue.birthday).getFullYear()
        let addFeaTureBirt = Number(featureBirt)
        let featurPhoneNumber = allValue.phoneNumber

        if(featurId.length <= 0) {
            document.querySelector('.js__error').textContent = `lỗi`
            return
        }
        if(featurName.length < 5) {
            document.querySelector('.js-name__error').textContent = `tên quá ngắn`
            return
        }
        if(featurName.length > 15){
            document.querySelector('.js-name__error').textContent = `tên quá dài`
            return
        }
        if(addFeaTureBirt < 18) {
            alert('ban chua du tuoi')
            return
        }
        if(featurPhoneNumber.length > 10){
            alert("so dien thoai sai, hoac khong dung")
            return
        }
        if (featurPhoneNumber.length < 10) {
            alert("so dien thoai sai, hoac khong dung")
            return
        }

        task.push(allValue)
        localStorage.setItem(keyLocalStorange, JSON.stringify(task))
        handleTaskRight()
    }


    

    function handleTaskRight()  {
        let result = ''
        task.forEach(taskt => {
            result += `
            <tr>
                <td class="task__id">${taskt?.id}</td>
                <td class="task__id">${taskt?.name}</td>
                <td class="task__id">${taskt?.birthday}</td>
                <td class="task__id">${taskt?.phoneNumber}</td>
                <div class="handle__btn__task2">
                <button js-btn_handle_edit ="${taskt?.edit}" class="btn__handle_js">Sửa</button>
                <button js-btn_handle_delete ="${taskt?.edit}" class="btn__handle_js">Xóa</button>
                </div>
            </tr>
            `
        })
        eleHandleTask2Right.innerHTML = result

        document.querySelectorAll("[js-btn_handle_delete]").forEach(eleDele => {
            eleDele.addEventListener('click', () => {
                const myDelete = Number(eleDele.getAttribute("js-btn_handle_delete"))
                handleDelete()
            })
        })

        document.querySelectorAll("[js-btn_handle_edit]").forEach(eleEdit => {
            eleEdit.addEventListener('click', () => {
                const myDel = Number(eleEdit.getAttribute("js-btn_handle_edit"))
                handleAddDel(myDel)
            })
        })
    }

    const handleDelete = (edit)=>{
        const findIndexAdd = task.findIndex(loadInDex => loadInDex.edit === edit)
        task.splice(findIndexAdd, 1)
        localStorage.setItem(keyLocalStorange, JSON.stringify(task))
        handleTaskRight()
    }

    const handleAddDel = (del) => {
        const findIndexDel = task.findIndex(loadInDex => loadInDex.edit === del)
        myIsDone = {
            isDone: true
        }
        
        const delIndex = task[Number(findIndexDel)]
        eleInputId.value = delIndex.id
        eleInputName.value = delIndex.name
        eleInputBirthDay.value = delIndex.birthday
        eleInputPhoneNumber.value = delIndex.phoneNumber
        localStorage.setItem(keyLocalStorange, JSON.stringify(task))
        handleTaskRight()
    }

    function btnFun() {
        handleTaskRight()
        eleInputBtn.addEventListener('click', (event) =>{
        event.preventDefault()
        valueTaskLeft()
    })
    }
    btnFun()
}
taskList()