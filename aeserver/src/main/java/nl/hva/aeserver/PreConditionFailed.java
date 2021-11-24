package nl.hva.aeserver;

/**
 * @author Nilava Kazal [studentennummer: 500847707] 24/11/2021 14:26
 */
public class PreConditionFailed extends Throwable {
    public PreConditionFailed(String message) {
        super(message);
    }
}
