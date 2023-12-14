package br.com.crud.exception;
import org.springframework.http.HttpStatus;

public class NegocioException extends Exception {

    private final HttpStatus httpStatus;
    private String causa;

    public NegocioException(String mensagem, HttpStatus httpStatus) {
        super(mensagem);
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
}
