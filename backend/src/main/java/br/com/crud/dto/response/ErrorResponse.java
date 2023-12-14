package br.com.crud.dto.response;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
@AllArgsConstructor
public class ErrorResponse {
    private Integer codigo;
    private HttpStatus codigo_http;
    private String descricao;
}
