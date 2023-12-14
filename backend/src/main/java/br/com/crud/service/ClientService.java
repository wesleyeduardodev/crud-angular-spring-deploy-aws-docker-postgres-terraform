package br.com.crud.service;
import br.com.crud.dto.request.ClientRequestDTO;
import br.com.crud.dto.response.ClientResponseDTO;
import br.com.crud.model.Client;
import br.com.crud.repository.ClientRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class ClientService {

    @Autowired
    ClientRepository clientRepository;

    public List<ClientResponseDTO> findAll() {
        log.info("Pesquisando todos os clientes...");
        List<Client> clients = clientRepository.findAll();
        List<ClientResponseDTO> clientsResponseDTOS = new ArrayList<>();
        for (Client client : clients) {
            clientsResponseDTOS.add(toResponseFromEntity(client));
        }
        log.info("Pesquisa de todos os clientes finalizada...");
        return clientsResponseDTOS;
    }

    public ClientResponseDTO findById(Long id) {
        log.info("Pesquisando cliente de id: " + id);
        Client client = clientRepository.findById(id).get();
        log.info("Pesquisa cliente de id: " + id + " finalizada...");
        return toResponseFromEntity(client);
    }

    public void delete(Long id) {
        log.info("Removendo cliente de id: " + id);
        clientRepository.deleteById(id);
        log.info("Remoção cliente de id: " + id + " finalizada...");
    }

    public ClientResponseDTO update(Long id, ClientRequestDTO clientRequestDTO) {
        log.info("Atualizando cliente de id: " + id);
        Client client = clientRepository.findById(id).get();
        client.setName(clientRequestDTO.getName());
        client.setCpfCnpj(clientRequestDTO.getCpfCnpj());
        client.setTelephone(clientRequestDTO.getTelephone());
        client.setEmail(clientRequestDTO.getEmail());
        log.info("Atualização cliente de id: " + id + " finalizada...");
        return toResponseFromEntity(clientRepository.save(client));
    }

    public ClientResponseDTO createEntityFromRequest(ClientRequestDTO clientRequestDTO) {
        log.info("Criando novo cliente...");
        Client client = toEntityFromRequest(clientRequestDTO);
        clientRepository.save(client);
        log.info("Criação de novo cliente finalizada...");
        return toResponseFromEntity(client);
    }

    public ClientResponseDTO toResponseFromEntity(Client entity) {
        return ClientResponseDTO.builder()
                .id(entity.getId())
                .name(entity.getName())
                .cpfCnpj(entity.getCpfCnpj())
                .telephone(entity.getTelephone())
                .email(entity.getEmail())
                .build();
    }

    public Client toEntityFromRequest(ClientRequestDTO request) {
        return Client
                .builder()
                .name(request.getName())
                .cpfCnpj(request.getCpfCnpj())
                .telephone(request.getTelephone())
                .email(request.getEmail())
                .build();
    }
}
