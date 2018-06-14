package hawservice.service;

import hawservice.exception.UserNotFoundException;
import hawservice.model.UserDTO;
import hawservice.repository.UserRepository;
import java.util.List;
import javax.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.joda.time.DateTime;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@Slf4j
public class UserService
{
    private final UserRepository userRepository;


    @NonNull
    public UserDTO createUser(@NonNull UserDTO userDTO)
    {
        userDTO.setDateCreated(DateTime.now());
        userDTO.setEnabled(true);

        return userRepository.save(userDTO);
    }


    @Transactional
    public UserDTO updateUser(Long id, UserDTO userDTO)
    {
        return userRepository.findById(id)
            .map(oldUser ->
            {
                oldUser.setEnabled(userDTO.isEnabled());
                oldUser.setCode(userDTO.getCode());
                oldUser.setEmail(userDTO.getEmail());
                oldUser.setFirst_name(userDTO.getFirst_name());
                oldUser.setLast_name(userDTO.getLast_name());
                oldUser.setGrad_year(userDTO.getGrad_year());
                oldUser.setGeo_location_new(userDTO.getGeo_location_new());
                oldUser.setGeo_location_old(userDTO.getGeo_location_old());

                return userRepository.save(oldUser);
            })
            .orElseGet(() ->
            {
                log.info("Cannot update user with id {} because it does not exist. Ignoring request", id);
                return null;
            });
    }


    @Transactional
    public UserDTO deleteUser(Long id)
    {
        return userRepository.findById(id)
            .map(user ->
            {
                user.setEnabled(false);
                user = userRepository.save(user);
                log.debug("Deleted user: {}", id);
                return user;
            })
            .orElseGet(() ->
            {
                log.info("Cannot delete user with id {} because it does not exist. Ignoring request", id);
                return null;
            });
    }


    @NonNull
    public UserDTO getUser(Long id) throws UserNotFoundException
    {
        return userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException("No user available with id: " + id));
    }


    public List<UserDTO> getUsers()
    {
        return userRepository.findAll();
    }
}
