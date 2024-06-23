<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "leonardodemourasouza12@gmail.com";
    $subject = "Nova dúvida enviada";

    $name = !empty($_POST['name']) ? $_POST['name'] : "Anônimo";
    $unit = !empty($_POST['unit']) ? $_POST['unit'] : "Não especificado";
    $topic = $_POST['topic'];
    $doubt_text = $_POST['doubt-text'];

    $message = "Nome: $name\n";
    $message .= "Unidade: $unit\n";
    $message .= "Pauta: $topic\n";
    $message .= "Dúvida: $doubt_text\n";

    $headers = "From: no-reply@seusite.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email enviado com sucesso!";
    } else {
        echo "Falha ao enviar o email.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>
