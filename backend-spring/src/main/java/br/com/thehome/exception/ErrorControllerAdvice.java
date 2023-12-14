package br.com.thehome.exception;
import br.com.thehome.dto.response.ErrorResponse;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestControllerAdvice
public class ErrorControllerAdvice {

    @ExceptionHandler(NegocioException.class)
    public ResponseEntity<ErrorResponse> handleNegocioException(NegocioException ex) {
        ErrorResponse errorResponse = new ErrorResponse(0, ex.getHttpStatus(), ex.getMessage());
        return ResponseEntity.status(ex.getHttpStatus()).body(errorResponse);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleException(Exception ex) {
        ErrorResponse errorResponse = new ErrorResponse(0, HttpStatus.BAD_REQUEST, ex.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<?> handle(ConstraintViolationException constraintViolationException) {
        Set<ConstraintViolation<?>> violations = constraintViolationException.getConstraintViolations();
        List<ErrorResponse> errorResponses = new ArrayList<>();
        if (CollectionUtils.isNotEmpty(violations)) {
            violations.forEach(violation -> {
                errorResponses.add(new ErrorResponse(0, HttpStatus.BAD_REQUEST, violation.getMessage() + "/" + violation.getPropertyPath()));
            });
        } else {
            errorResponses.add(new ErrorResponse(0, HttpStatus.BAD_REQUEST, "ConstraintViolationException occured."));
        }
        return new ResponseEntity<>(errorResponses, HttpStatus.BAD_REQUEST);
    }
}
