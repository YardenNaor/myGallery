'use strict'

$(onInit)

function onInit() {
    renderVendors()
    renderFilterByQueryStringParams()
    renderCars()
    // const $elH1 = $('h1')
    // $('h1').text('Something new')
    // const text = $('h1').text()
    // console.log('text:', text)
    // $('h5').text('Susita')
    addEventListeners()

}




function renderCars() {
    var cars = getCars()
    var strHtmls = cars.map(car => `
        <article data-car-id="${car.id}" class="car-preview">
            <button class="btn-remove" onclick1="onDeleteCar('${car.id}')">X</button>
            <h5>${car.vendor}</h5>
            <h6>Up to <span>${car.maxSpeed}</span> KMH</h6>
            <button class="btn-read" onclick1="onReadCar('${car.id}')">Details</button>
            <button class="btn-update" onclick1="onUpdateCar('${car.id}')">Update</button>
            <img onerror="this.src='img/fiat.png'" src="img/${car.vendor}.png" alt="Car by ${car.vendor}">
        </article> 
        `
    )
    // document.querySelector('.cars-container').innerHTML = strHtmls.join('')
    $('.cars-container').html(strHtmls)
    addCarEventListeners()
}


function renderVendors() {
    const vendors = getVendors()
    const strHTMLs = vendors.map(vendor => `<option>${vendor}</option>`)
    // const elVendors = document.querySelector('.filter-vendor-select')
    // elVendors.innerHTML += strHTMLs.join('')
    $('.filter-vendor-select').append(strHTMLs)
}


function addEventListeners() {
    $('.btn-next-page').on('click', onNextPage)
    $('.btn-add-car').on('click', onAddCar)
    $('.sort-by').on('change', onSetSortBy)
    $('.sort-desc').on('input', onSetSortBy)

    $('.filter-vendor-select').on('change', function () {
        onSetFilterBy({ vendor: this.value })
    })

    $('.filter-speed-range').on('input', function () {
        this.title = this.value
        onSetFilterBy({ minSpeed: this.value })
    })
}

function addCarEventListeners() {
    $('.btn-remove').on('click', function () {
        const carId = $(this).closest('.car-preview').data('carId')
        onDeleteCar(carId)
    })

    $('.btn-read').on('click', function () {
        const carId = $(this).closest('.car-preview').data('carId')
        onReadCar(carId)
    })

    $('.btn-update').on('click', function () {
        const carId = $(this).closest('.car-preview').data('carId')
        onUpdateCar(carId)
    })
}

function onDeleteCar(carId) {
    deleteCar(carId)
    renderCars()
    flashMsg(`Car Deleted`)
}

function onAddCar() {
    var vendor = prompt('vendor?')
    if (vendor) {
        const car = addCar(vendor)
        renderCars()
        flashMsg(`Car Added (id: ${car.id})`)
    }
}

function onUpdateCar(carId) {
    const car = getCarById(carId)
    var newSpeed = +prompt('Speed?', car.maxSpeed)
    if (newSpeed) {
        const car = updateCar(carId, newSpeed)
        renderCars()
        flashMsg(`Speed updated to: ${car.maxSpeed}`)
    }
}

function onReadCar(carId) {
    var car = getCarById(carId)
    var elModal = document.querySelector('.modal')
    var $elModal = $('.modal')
    // elModal.querySelector('h3').innerText = car.vendor
    $elModal.children('h3').text(car.vendor)
    // elModal.querySelector('h4 span').innerText = car.maxSpeed
    $elModal.find('h4 span').text(car.maxSpeed)
    // elModal.querySelector('p').innerText = car.desc
    $elModal.children('p').text(car.desc)

    $elModal.addClass('open')
}

function onSetFilterBy(filterBy) {
    filterBy = setCarFilter(filterBy)
    const queryStringParams = `?vendor=${gFilterBy.vendor}&minSpeed=${gFilterBy.minSpeed}`
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + queryStringParams
    window.history.pushState({ path: newUrl }, '', newUrl)
    renderCars()
}


function onCloseModal() {
    document.querySelector('.modal').classList.remove('open')
}

function flashMsg(msg) {
    // const el = document.querySelector('.user-msg')
    const $el = $('.user-msg')
    // $el.addClass('open')
    // el.classList.add('open')
    $el.text(msg).addClass('open')
    setTimeout(() => {
        // el.classList.remove('open')
        $el.removeClass('open')
    }, 3000)
}

function renderFilterByQueryStringParams() {
    const queryStringParams = new URLSearchParams(window.location.search)
    const filterBy = {
        vendor: queryStringParams.get('vendor') || '',
        minSpeed: queryStringParams.get('minSpeed') || 0
    }

    document.querySelector('.filter-vendor-select').value = filterBy.vendor
    document.querySelector('.filter-speed-range').value = filterBy.minSpeed
    setCarFilter(filterBy)
}

function onSetSortBy() {
    const prop = document.querySelector('.sort-by').value
    const isDesc = document.querySelector('.sort-desc').checked

    const sortBy = {}
    sortBy[prop] = (isDesc) ? -1 : 1

    // Shorter Syntax:
    // const sortBy = {
    //     [prop] : (isDesc)? -1 : 1
    // }
    setCarSort(sortBy)
    renderCars()
}



function onNextPage() {
    nextPage()
    renderCars()
}


