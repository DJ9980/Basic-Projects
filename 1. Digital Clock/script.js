setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let doth = document.querySelector('.h_dot');
    let dotm = document.querySelector('.m_dot');
    let dots = document.querySelector('.s_dot');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    ap = h >= 12 ? 'PM' : 'AM';

    if (h > 12) {
        h = h - 12;
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hours.innerHTML = h + ' Hours';
    minutes.innerHTML = m + ' Minutes';
    seconds.innerHTML = s + ' Seconds';
    ampm.innerHTML = ap;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    doth.style.transform = `rotate(${h * 30}deg)`;
    dotm.style.transform = `rotate(${m * 6}deg)`;
    dots.style.transform = `rotate(${s * 6}deg)`;

}, 1000);