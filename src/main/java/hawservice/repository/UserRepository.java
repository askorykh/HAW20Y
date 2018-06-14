package hawservice.repository;

import hawservice.model.UserDTO;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserDTO, Long>
{
    Optional<UserDTO> findById(Long id);

    List<UserDTO> findAll();


}


