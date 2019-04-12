function b_block_calculate_init() {
    var b_block_calculate = {
        init: function () {
            console.log('------ [ ready ]');

            var num = 1;
            console.log('------ [ new table ]');
            var table = this.createFormElements.table();
            $('<caption></caption>')
            // .text('Расчёт материалов и работы')
            // .appendTo(table)
            // .clone()
                .text('Укажите площадь и толщину')
                .appendTo(table)
            ;

            console.log('------ [ new header ]');
            this.createFormElements.headerTh(table);

            console.log('------ [ new calculator form ]');
            this.createFormElements.lineCalculatorForm(num);
            console.log('------ [ add tbody ]');
            table.append(this.activeElements.tbody);

            console.log('------ [ new footer ]');
            this.createFormElements.footerTr(table);

            var calculator_of_materials_and_works = $("#calculator_of_materials_and_works");
            calculator_of_materials_and_works.append(table);

            table = $('<table></table>')
                .attr('style', 'margin-left: 0; border: 0px solid black; margin-top: 25px;');

            // $('<caption></caption>')
            //     .text('Расчёт этажа')
            //     .appendTo(table)
            // ;

            calculator_of_materials_and_works.append(table);
            var tr = $('<tr></tr>');
            $('<th></th>')
                .attr('style', 'font-size: 1.2rem; border: 1px solid #ddd; text-align: center;')
                .attr('colspan', '2')
                // .text('Укажите этаж')
                // .appendTo(tr)
                // .clone()
                // .text('Сумма грн.')

                .text('Расчёт этажа')
                .appendTo(tr)
                .clone()
                .attr('style', 'font-size: 1.2rem; border: 1px solid #ddd; text-align: center; min-width: 183px;')
                .text('Расчёт транспорта')
                .appendTo(tr)
            ;

            var tr2 = $('<tr></tr>');
            b_block_calculate.activeElements.etazh = $('<input />')
                .addClass('calculatorField')
                .attr('style', 'width: 35px;')
            ;

            b_block_calculate.activeElements.carWhere = $('<select></select>').addClass('calculatorField');
            $('<option></option>')
                .val(1)
                .text('По городу')
                .appendTo(b_block_calculate.activeElements.carWhere)
                .clone()
                .val(2)
                .text('Край города')
                .appendTo(b_block_calculate.activeElements.carWhere)
                .clone()
                .val(3)
                .text('За город до 30 км')
                .appendTo(b_block_calculate.activeElements.carWhere)
            ;

            b_block_calculate.activeElements.etazhSum = $('<th></th>')
                .attr('style', 'border: 1px solid #ddd; text-align: center; min-width: 105px;')
                // .attr('colspan', '2')
                .html('Укажите этаж')
                .appendTo(tr2)
                .clone()
                .attr('style', 'border: 1px solid #ddd; text-align: center;')
                .html(b_block_calculate.activeElements.etazh)
                .append($('<div></div>').addClass('noFormField').html(0))
                .appendTo(tr2)
                .clone()
                // .html('Куда - ')
                .attr('colspan', '2')
                .html(b_block_calculate.activeElements.carWhere)
                .append($('<div></div>').addClass('noFormField').html(0))
                .appendTo(tr2)
            ;

            var trEtazhSum = $('<td></td>')
                .attr('style', 'border: 1px solid #ddd; text-align: center;')
                .attr('colspan', '2')
                .html('0 грн.')
            ;

            var trCarSum = trEtazhSum.clone();

            b_block_calculate.activeElements.trEtazhSum = trEtazhSum;
            b_block_calculate.activeElements.trCarSum = trCarSum;

            var tr3 = $('<tr></tr>')
                .append(trEtazhSum)
                .append(trCarSum)
            ;

            $('<thead></thead>')
                .append(tr)
                .append(tr2)
                .append(tr3)
                .appendTo(table);

            // tr = $('<tr></tr>');
            // $('<td></td>')
            //     .attr('style', 'vertical-align: bottom; text-align: center; border: 1px solid #ddd; border-left: 0; border-right: 0; height: 50px;')
            //     .attr('colspan', '4')
            //     .text('Расчёт транспорта')
            //     .appendTo(tr)
            // ;

            // tr2 = $('<tr></tr>').attr('style', 'font-size: .857rem; text-align: center;');
            // $('<td></td>')
            //     .text('Количество машин')
            //     .appendTo(tr2)
            //     .clone()
            //     .text('Куда')
            //     .attr('colspan', '2')
            //     .appendTo(tr2)
            //     .clone()
            //     .text('Сумма')
            //     .attr('colspan', '1')
            //     .appendTo(tr2)
            // ;

            // tr3 = $('<tr></tr>').attr('style', 'text-align: center;');
            // b_block_calculate.activeElements.carCount = $('<input />')
            //     .addClass('calculatorField')
            //     .attr('style', 'width: 106px;')
            // ;

            // b_block_calculate.activeElements.carSum = $('<td></td>')
            //     .attr('style', 'border: 1px solid #ddd;')
            //     .html(b_block_calculate.activeElements.carCount)
            //     .append($('<div></div>').addClass('noFormField').html(0))
            //     .appendTo(tr3)
            //     .clone()
            //     // .html(b_block_calculate.activeElements.carWhere)
            //     .append($('<div></div>').addClass('noFormField').html(0))
            //     .attr('colspan', '2')
            //     .appendTo(tr3)
            //     .clone()
            //     .attr('style', 'border: 1px solid #ddd; width: 100px;')
            //     .text('0')
            //     .attr('colspan', '1')
            //     .appendTo(tr3)
            // ;

            tr4 = $('<tr></tr>');
            $('<td></td>')
                .attr('style', 'height: 30px;')
                .attr('colspan', '4')
                .appendTo(tr4)
            ;

            b_block_calculate.activeElements.sumFinale = $('<tr></tr>');
            $('<td></td>')
                .attr('rowspan', '2')
                .text('Всего:')
                .attr('style', 'padding-right: 15px; text-align: right;')
                .appendTo(b_block_calculate.activeElements.sumFinale)
                .clone()
                .attr('style', 'vertical-align: bottom; text-align: right; border-left: 1px solid #ddd; border-top: 1px solid #ddd;')
                .attr('rowspan', '1')
                .attr('colspan', '2')
                .html('По объекту, грн.')
                .appendTo(b_block_calculate.activeElements.sumFinale)
                .clone()
                .attr('style', 'vertical-align: bottom; text-align: center; border-right: 1px solid #ddd; border-top: 1px solid #ddd; width: 117px;')
                .attr('colspan', '1')
                .html('0')
                .appendTo(b_block_calculate.activeElements.sumFinale)
            ;

            b_block_calculate.activeElements.sumFinaleBySquare = $('<tr></tr>');
            $('<td></td>')
                .attr('style', 'vertical-align: bottom; text-align: right; border-left: 1px solid #ddd; border-bottom: 1px solid #ddd;')
                .attr('colspan', '2')
                .html('За кв.м, грн.')
                .appendTo(b_block_calculate.activeElements.sumFinaleBySquare)
                .clone()
                .attr('style', 'vertical-align: bottom; text-align: center; border-right: 1px solid #ddd; border-bottom: 1px solid #ddd;')
                .attr('colspan', '1')
                .html('0')
                .appendTo(b_block_calculate.activeElements.sumFinaleBySquare)
            ;

            $('<tbody></tbody>')
            // .append(tr)
            // .append(tr2)
            // .append(tr3)
                .append(tr4)
                .append(b_block_calculate.activeElements.sumFinale)
                .append(b_block_calculate.activeElements.sumFinaleBySquare)
                .appendTo(table)
            ;

            //calculator_of_materials_and_works.append(b_block_calculate.activeElements.sumFinale);
            //calculator_of_materials_and_works.append(b_block_calculate.activeElements.sumFinaleBySquare);

            $(".calculatorField").change(function() {
                console.log('------ --- (EF) - change -----------------');
                b_block_calculate.activeElements.calculateFinaleSum();
            });
        },
        createFormElements: {
            table: function () {
                var tableDiv = $('<table></table>');

                tableDiv.attr('style', 'margin-left: 0; border: 0px solid black;');
                return tableDiv;
            },
            headerTh: function (table) {
                var tr = $('<tr></tr>');
                $('<thead></thead>').attr('style', 'font-size: .857rem;').append(tr).appendTo(table);
                $('<th></th>')
                    .attr('style', 'width: 50px; border: 1px solid #ddd; border-left: 0; border-top: 0;')
                    .text('')
                    .appendTo(tr)
                    .clone()
                    .text('Факт. площадь (от 40 м2)')
                    .attr('style', 'width: 100px; border: 1px solid #ddd;')
                    .appendTo(tr)
                    .clone()
                    .text('Толщина')
                    .attr('style', 'width: 75px; border: 1px solid #ddd;')
                    .appendTo(tr)
                    .clone()
                    .text('Расчёт материал.')
                    .attr('style', 'width: 150px; border: 1px solid #ddd;')
                    .appendTo(tr)
                    .clone()
                    .text('Расчёт работы')
                    .attr('style', 'width: 115px; border: 1px solid #ddd;')
                    .appendTo(tr)
                ;
            },
            footerTr: function (table) {

                var activeElements = b_block_calculate.activeElements;

                var tr = $('<tr></tr>');
                $('<td></td>')
                    .attr('style', 'height: 70px; border: 1px solid #ddd;')
                    .appendTo(tr)
                    .clone()
                    .appendTo(tr)
                    .clone()
                    .appendTo(tr)
                    .clone()
                    .appendTo(tr)
                    .clone()
                    .appendTo(tr)
                ;

                var tr2 = $('<tr></tr>').attr('style', 'font-size: .857rem;');
                $('<td></td>')
                    .attr('style', 'text-align: center; border: 1px solid #ddd;')
                    .text('Σ')
                    .appendTo(tr2)
                    .clone()
                    .attr('style', 'text-align: center; border: 1px solid #ddd;')
                    .text('Площадь, м2')
                    .appendTo(tr2)
                    .clone()
                    .text('')
                    .appendTo(tr2)
                    .clone()
                    .text('По материалам, грн')
                    .appendTo(tr2)
                    .clone()
                    .text('По работам, грн')
                    .appendTo(tr2)
                ;

                var tr3 = $('<tr></tr>');
                $('<td></td>')
                    .attr('style', 'border: 1px solid #ddd; padding-left: 10px; border-left: 0; border-bottom: 0;')
                    .appendTo(tr3)
                    .clone()
                    .attr('style', 'border: 1px solid #ddd; text-align: center;')
                    .html(activeElements.sumSquare)
                    .appendTo(tr3)
                    .clone()
                    .text('')
                    .appendTo(tr3)
                    .clone()
                    .html(activeElements.sumElements)
                    .appendTo(tr3)
                    .clone()
                    .html(activeElements.sumWorks)
                    .appendTo(tr3)
                ;

                $('<tfoot></tfoot>')
                    .append(tr)
                    .append(tr2)
                    .append(tr3)
                    .appendTo(table)
                ;
            },
            lineCalculatorForm: function (num) {
                var tr = $('<tr></tr>');
                $('<td></td>')
                    .attr('style', 'text-align: center; border: 1px solid #ddd;')
                    .text(num)
                    .appendTo(tr)
                    .clone()
                    .attr('style', 'height: 30px; border: 1px solid #ddd;')
                    .html(this.inputActualArea())
                    .append($('<div></div>').addClass('noFormField').attr('style', 'text-align: center; width: 100%;').html(0))
                    .appendTo(tr)
                    .clone()
                    .html(this.selectThickness())
                    .append($('<div></div>').addClass('noFormField').html(0))
                    .attr('style', 'border: 1px solid #ddd; text-align: center;')
                    .appendTo(tr)
                    .clone()
                    .attr('style', 'text-align: center; border: 1px solid #ddd;')
                    .text(0)
                    .appendTo(tr)
                    .clone()
                    .text(0)
                    .appendTo(tr)
                ;
                b_block_calculate.activeElements.lineCalculatorForm = tr;
                b_block_calculate
                    .activeElements
                    .tbody
                    .append(tr)
                ;
            },
            inputActualArea: function () {
                return $('<input />')
                    .attr('style', 'width: 100px;')
                    .addClass('calculatorField')
                    ;
            },
            selectThickness: function () {
                var select = $('<select></select>')
                    .addClass('calculatorField')
                ;
                $.each(b_block_calculate.settings, function(index, valuesSquare) {
                    $('<option></option>')
                        .text(valuesSquare.text)
                        .appendTo(select)
                    ;
                });
                return select;
            }
        },
        activeElements: {
            etazh: $(),
            etazhSum: $(),
            carCount: $(),
            carWhere: $(),
            carSum: $(),
            trEtazhSum: $(),
            trCarSum: $(),
            sumFinale: $(),
            sumFinaleBySquare: $(),
            tbody: $('<tbody></tbody>'),
            sumSquare: $('<div></div>').text(0),
            sumElements: $('<div></div>').text(0),
            sumWorks: $('<div></div>').text(0),
            lineCalculatorForm: $(),
            newLineIsEmpty: function () {
                var lines = this.tbody.children('tr');
                $.each(lines, function (index, values) {
                    var inputTd = $(values).children('td')[1];
                    var inputVal = $(inputTd).children('input');
                    console.info('------- --- ---val----', inputVal.val(), inputVal.val() < 1);
                    if(inputVal.val() < 1) {
                        return true;
                    }
                });
                return false;
            },
            calculateFinaleSum: function () {
                var sumSquare = 0;
                var sumElements = 0;
                var sumWorks = 0;
                var issetEmptyLine = false;

                var lines = this.tbody.children('tr');
                $.each(lines, function (index, values) {
                    var tdVal = $(values).children('td');
                    var square = parseInt($(tdVal[1]).children('input').val(), 10);
                    var selectVal = $(tdVal[2]).children('select').val();

                    $($(tdVal[1]).find('div')[0]).html(square);
                    $($(tdVal[2]).find('div')[0]).html(selectVal);

                    console.log('------');
                    console.log('------');
                    console.log('------');
                    console.log('------ --- (EF) -< square: ', square);
                    console.log('------ --- (EF) -< sel: ', selectVal);
                    console.log('------');

                    if(square > 0) {
                        $.each(b_block_calculate.settings, function(index, valuesSquare) {
                            if(selectVal == valuesSquare.text){
                                console.log('------ --- (EF) -< settings: ', index, selectVal == valuesSquare.text);
                                $.each(valuesSquare.square, function(ind, values) {
                                    if(square >= values.minRange && square < values.maxRange){
                                        console.log('------ --- (EF) -< settings: ', ind, square >= values.minRange, square <= values.maxRange);
                                        var sum1 = square * values.priceOfMaterials;
                                        var sum2 = square * values.priceOfWorks;

                                        if(sum1.toString().indexOf(".") > 0) {
                                            sum1 = sum1.toFixed(2);
                                        }

                                        if(sum2.toString().indexOf(".") > 0) {
                                            sum2 = sum2.toFixed(2);
                                        }

                                        $(tdVal[3]).html(sum1);
                                        $(tdVal[4]).html(sum2);
                                    }
                                });
                            }
                        });

                        sumSquare = sumSquare + square;
                        sumElements = sumElements + parseInt($(tdVal[3]).text(), 10);
                        sumWorks = sumWorks + parseInt($(tdVal[4]).text(), 10);
                    } else {
                        $(tdVal[3]).html('0');
                        $(tdVal[4]).html('0');
                        issetEmptyLine = true;
                    }
                });

                console.log('------ --- (EF) -< sumSquare: ', sumSquare);
                console.log('------ --- (EF) -< sumElements: ', sumElements);
                console.log('------ --- (EF) -< sumSquare: ', sumWorks);

                this.sumSquare.html(sumSquare);
                this.sumElements.html(sumElements);
                this.sumWorks.html(sumWorks);

                var sumPriceEtazh = 0;
                var priceEtazh = 200;
                var inputEtazh = parseInt(b_block_calculate.activeElements.etazh.val(), 10);
                b_block_calculate.activeElements.etazh.parent().children('.noFormField').html(inputEtazh);
                if(!inputEtazh > 0){
                    inputEtazh = 0;
                    b_block_calculate.activeElements.etazh.val(0);
                }
                if(inputEtazh > 3){
                    sumPriceEtazh = inputEtazh * priceEtazh;
                } else if (inputEtazh > 0) {
                    sumPriceEtazh = 300;
                }
                // b_block_calculate.activeElements.etazhSum.html(sumPriceEtazh);
                // b_block_calculate.activeElements.etazh.parent().children('div').html(inputEtazh);
                // console.info(b_block_calculate.activeElements.carWhere);

                var carWhereListLabel = {
                    '1': 'По городу',
                    '2': 'Край города',
                    '3': 'За город до 30 км',
                };
                var carWhereList = {
                    '1': 1800,
                    '2': 2200,
                    '3': 2600,
                };
                var carCount = 1;
                // var carCount = parseInt(b_block_calculate.activeElements.carCount.val(), 10);
                // if(!carCount > 0){
                //     carCount = 0;
                // }
                var carWhere = b_block_calculate.activeElements.carWhere.val();
                b_block_calculate.activeElements.carWhere.parent().children('.noFormField').html(carWhereListLabel[carWhere]);
                var carSum = carWhereList[carWhere] * carCount;
                if(isNaN(carSum)){
                    carSum = 0;
                }
                // b_block_calculate.activeElements.carSum.html(carSum);
                // b_block_calculate.activeElements.carCount.parent().children('div').html(carCount);
                // b_block_calculate.activeElements.carWhere.parent().children('div').html(carWhereListLabel[carWhere]);

                b_block_calculate.activeElements.trEtazhSum.html(sumPriceEtazh + ' грн.');
                b_block_calculate.activeElements.trCarSum.html(carSum + ' грн.');
                console.log('------');
                console.log('------ --- (EF) -< carCount: ', carCount);
                console.log('------ --- (EF) -< carWhere: ', carWhere);
                console.log('------ --- (EF) -< carSum: ', carSum);
                console.log('------ --- (EF) -< issetEmptyLine: ', issetEmptyLine);

                var sumFinale = sumElements + sumWorks + sumPriceEtazh + carSum;
                var sumFinaleBySquare = sumFinale / sumSquare;
                console.info('[                   ]', sumFinaleBySquare);
                if(!isFinite(sumFinaleBySquare)){
                    sumFinaleBySquare = 0;
                } else if(sumFinaleBySquare.toString().indexOf(".") > 0) {
                    sumFinaleBySquare = sumFinaleBySquare.toFixed(2);
                }

                console.info('[                   ]', !isFinite(sumFinaleBySquare));
                console.info('[                   ]', sumFinaleBySquare.toString().indexOf(".") > 0);

                var blsockSumFinale = b_block_calculate.activeElements.sumFinale.children('td');
                var blsockSumFinaleBySquare = b_block_calculate.activeElements.sumFinaleBySquare.children('td');

                $(blsockSumFinale[2]).html(sumFinale);
                $(blsockSumFinaleBySquare[1]).html(sumFinaleBySquare);
                console.info('[                   ]', $(blsockSumFinaleBySquare[2]));
                if(!issetEmptyLine){
                    console.log('------ --- --- next');
                    var newTr = b_block_calculate
                        .activeElements
                        .lineCalculatorForm
                    ;
                    if(parseInt($(newTr.children('td')[0]).text(), 10) < 3){
                        newTr = newTr
                            .clone(1)
                            .addClass('transitionOpacity-1-5')
                            .appendTo(b_block_calculate.activeElements.tbody)
                        ;
                        var tds = newTr.children('td');
                        var newNum = parseInt($(tds[0]).text(), 10) + 1;
                        $(tds[0]).html(newNum);
                        $(tds[1]).children('input').val('');
                        $($(tds[1]).children('div')[0]).html('0');
                        $(tds[3]).html(0);
                        $(tds[4]).html(0);

                        b_block_calculate.activeElements.lineCalculatorForm = newTr.clone(1);

                        setTimeout(function () {
                            newTr.addClass('viewTransitionOpacity');
                        }, 1);
                    }
                }

                var qqq = $("#calculator_of_materials_and_works").clone();

                $(qqq.find('input')).remove();
                $(qqq.find('select')).remove();
                $(qqq.find('table')[0]).find('tbody').children('tr').each(function (index, value) {
                    if($($(value).children('td')[1]).find('.noFormField').text() === ''
                        || $($(value).children('td')[1]).find('.noFormField').text() === '0'
                    ){
                        console.error('remove!');
                        value.remove();
                    } else {
                        console.log({
                            children_td_test: $($(value).children('td')[1]).find('.noFormField').text() === '',
                            noFormField_text: $($(value).children('td')[1]).find('.noFormField').text(),
                            if_: $($(value).children('td')[1]).find('.noFormField').text() === '0'
                        });
                    }
                });

                console.log('--------------------re!');
                console.log('--------------------re!');
                console.log('--------------------re!');

                var result_re_HTML = qqq.html();
                //var result_re_ob = $('test_re_c_tag');


                var input_to_form = $('input.form_field_text[name="form[17778]"][type="hidden"]');

                input_to_form.val(result_re_HTML);

                //var tetstdsdd = input_to_form.val();
                //result_re_ob.html(tetstdsdd);
            }
        },
        settings: {
            T60: {
                text: '60-69',
                square: {
                    p40: {
                        priceOfMaterials: 141.21,
                        priceOfWorks: 173,
                        minRange: 40,
                        maxRange: 60
                    },
                    p60: {
                        priceOfMaterials: 137.15,
                        priceOfWorks: 121,
                        minRange: 60,
                        maxRange: 80
                    },
                    p80: {
                        priceOfMaterials: 134.88,
                        priceOfWorks: 94,
                        minRange: 80,
                        maxRange: 100
                    },
                    p100: {
                        priceOfMaterials: 131.68,
                        priceOfWorks: 84,
                        minRange: 100,
                        maxRange: 2001
                    }
                }
            },
            T70: {
                text: '70-79',
                square: {
                    p40: {
                        priceOfMaterials: 155.73,
                        priceOfWorks: 173,
                        minRange: 40,
                        maxRange: 60
                    },
                    p60: {
                        priceOfMaterials: 154.09,
                        priceOfWorks: 121,
                        minRange: 60,
                        maxRange: 80
                    },
                    p80: {
                        priceOfMaterials: 166.96,
                        priceOfWorks: 94,
                        minRange: 80,
                        maxRange: 100
                    },
                    p100: {
                        priceOfMaterials: 151.48,
                        priceOfWorks: 84,
                        minRange: 100,
                        maxRange: 2001
                    }
                }
            },
            T80: {
                text: '80-89',
                square: {
                    p40: {
                        priceOfMaterials: 180.49,
                        priceOfWorks: 173,
                        minRange: 40,
                        maxRange: 60
                    },
                    p60: {
                        priceOfMaterials: 175,
                        priceOfWorks: 121,
                        minRange: 60,
                        maxRange: 80
                    },
                    p80: {
                        priceOfMaterials: 185.84,
                        priceOfWorks: 94,
                        minRange: 80,
                        maxRange: 100
                    },
                    p100: {
                        priceOfMaterials: 168.21,
                        priceOfWorks: 84,
                        minRange: 100,
                        maxRange: 2001
                    }
                }
            }
        }
    };

    b_block_calculate.init();
}

function remove_and_create_new_form() {
    $("#calculator_of_materials_and_works").remove();
    $('#calculator').html($("<div id='calculator_of_materials_and_works'></div>"));
    b_block_calculate_init();
}
