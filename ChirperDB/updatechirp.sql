CREATE DEFINER=`chirper-admin`@`localhost` PROCEDURE `updateChirp`(chirp_id INT, chirp_msg VARCHAR(140))
BEGIN
	UPDATE Chirper.Chirp SET message = chirp_msg;
END