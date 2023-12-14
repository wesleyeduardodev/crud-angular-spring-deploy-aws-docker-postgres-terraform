package br.com.thehome.utils;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PaginatorUtils{
    public Integer number;
    public Long totalElements;
    public Integer totalPages;
}
