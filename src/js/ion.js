const priceFields = {
  min: document.querySelector('#price-min'),
  max: document.querySelector('#price-max')
};
const etFields = {
  min: document.querySelector('#et-min'),
  max: document.querySelector('#et-max')
};

$('#price-ranger').ionRangeSlider({
  type: 'double',
  grid: false,
  min: 0,
  max: 50000,
  from: 0,
  to: 20000,
  prefix: '',
  onStart: function (data) {
    priceFields.min.value = data.from;
    priceFields.max.value = data.to;
  },
  onChange: function (data) {
    priceFields.min.value = data.from;
    priceFields.max.value = data.to;
  },
});

$('#et-ranger').ionRangeSlider({
  type: 'double',
  grid: false,
  min: -44,
  max: 281,
  from: -44,
  to: 281,
  prefix: '',
  onStart: function (data) {
    etFields.min.value = data.from;
    etFields.max.value = data.to;
  },
  onChange: function (data) {
    etFields.min.value = data.from;
    etFields.max.value = data.to;
  },
});
