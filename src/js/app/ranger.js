import noUiSlider from 'nouislider';

const priceRanger = document.querySelector('#price-ranger');
const priceFields = [document.querySelector('#price-min'), document.querySelector('#price-max')];
if(priceRanger) {
    noUiSlider.create(priceRanger, {
        start: [0, 20000],
        step: 100,
        connect: true,
        tooltips: false,
        range: {
            'min': [0],
            'max': [50000]
        },
        format: wNumb({
            decimals: 0,
            //suffix: ' ₽'
        })
    });

    priceRanger.noUiSlider.on('update', (values, handle) => {
      priceFields[handle].value = values[handle];
    });

    priceFields.forEach((input, handle) => {
        input.addEventListener('change', (e) => {
          priceRanger.noUiSlider.setHandle(handle, e.target.value);
        });

        input.addEventListener('keydown', (e) => {
            if(e.keyCode == 13) {
                e.preventDefault();
            }
            let values = priceRanger.noUiSlider.get();
            let value = Number(values[handle]);
            
            let steps = priceRanger.noUiSlider.steps();
            let step = steps[handle];

            let position;
            
            switch (e.which) {
                case 13:
                  priceRanger.noUiSlider.setHandle(handle, e.target.value);
                break;

                case 38:
                position = step[1];
                if (position === false) {
                  position = 1;
                }                
                if (position !== null) {
                  priceRanger.noUiSlider.setHandle(handle, value + position);
                }
                break;

                case 40:
                position = step[0];
                if (position === false) {
                  position = 1;
                }
                if (position !== null) {
                  priceRanger.noUiSlider.setHandle(handle, value - position);
                }
                break;
            }
        });
    });
}

const etRanger = document.querySelector('#et-ranger');
const etFields = [document.querySelector('#et-min'), document.querySelector('#et-max')];
if(etRanger) {
    noUiSlider.create(etRanger, {
        start: [-44, 281],
        step: 1,
        connect: true,
        tooltips: false,
        range: {
            'min': [-44],
            'max': [281]
        },
        format: wNumb({
            decimals: 0,
            //suffix: ' ₽'
        })
    });

    etRanger.noUiSlider.on('update', (values, handle) => {
      etFields[handle].value = values[handle];
    });

    etFields.forEach((input, handle) => {
        input.addEventListener('change', (e) => {
          etRanger.noUiSlider.setHandle(handle, e.target.value);
        });

        input.addEventListener('keydown', (e) => {
            if(e.keyCode == 13) {
                e.preventDefault();
            }
            let values = etRanger.noUiSlider.get();
            let value = Number(values[handle]);
            
            let steps = etRanger.noUiSlider.steps();
            let step = steps[handle];

            let position;
            
            switch (e.which) {
                case 13:
                  etRanger.noUiSlider.setHandle(handle, e.target.value);
                break;

                case 38:
                position = step[1];
                if (position === false) {
                  position = 1;
                }                
                if (position !== null) {
                  etRanger.noUiSlider.setHandle(handle, value + position);
                }
                break;

                case 40:
                position = step[0];
                if (position === false) {
                  position = 1;
                }
                if (position !== null) {
                  etRanger.noUiSlider.setHandle(handle, value - position);
                }
                break;
            }
        });
    });
}