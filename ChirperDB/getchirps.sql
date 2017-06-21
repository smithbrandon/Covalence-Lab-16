CREATE DEFINER=`chirper-admin`@`localhost` PROCEDURE `getChirps`()
BEGIN
	SELECT * FROM Chirper.Chirp;
END