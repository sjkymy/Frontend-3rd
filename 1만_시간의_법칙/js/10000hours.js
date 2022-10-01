// 이게 아닌건 알지만 그냥 넣어봤습니다.
// 버튼을 누르면 결과창이 열렸다 닫혔다하는 코드입니다.
function openclose() {
    let status = $('#result-box').css('display');
    if (status == 'block') {
        $('#result-box').hide();
        $('#btn-result-box').text('나는 며칠 동안 훈련을 해야 1만 시간이 될까?');
    } else {
        $('#result-box').show();
        $('#btn-result-box').text('나는 며칠 동안 훈련을 해야 1만 시간이 될까?');
    }

    // strong 요소 안에 입력했던 input 값이 그대로 표시됩니다.
    let txtspec = document.getElementById('txt-spec').value;
    document.getElementById("txt-spec-output").innerText = txtspec;

    let timespec = document.getElementById('time-spec').value;
    document.getElementById("time-spec-output").innerText = Math.round(10000/timespec);
}