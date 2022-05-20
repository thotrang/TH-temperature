let n=+prompt("nhập nhiệt độ");
let temperature = new Temperature(n);
let F = temperature.getFahrenheit();
let K = temperature.getFelvins();

document.write("Nhiệt độ K: " + K + "<br>"
                + "Nhiệt độ F: " + F);

