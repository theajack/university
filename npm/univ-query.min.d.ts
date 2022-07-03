
interface IUQuery {
    (query: string): Array<{
        name: string, 
        code: string, 
        department: string, 
        city: string, 
        type: string, 
        info: string, 
    }>;
    version: string;
    isFake(name: string): 'yes' | 'no' | 'unknown';
}

const UQuery: IUQuery;

export default UQuery;