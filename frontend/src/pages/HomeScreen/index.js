import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { 
    Container, 
    CategoryArea, 
    CategoryList, 
    ProductArea, 
    ProductList,
    ProductPaginationArea,
    ProductPaginationItem 
} from './styled';
import ReactTooltip from 'react-tooltip';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

import api from '../../api';


let searchTimer = null;

export default () => {
    const history = useHistory();

    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);

    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({});
    
    const [activeCategory, setActiveCategory] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [activeSearch, setActiveSearch] = useState('');
    

    const [totalPages, setTotalPages] = useState(0);
    const [products, setProducts] = useState([]);
    

    // INICIO - Pegar os produtos que estão na base através da API, pasando também os filtros se necessários
    const getProducts = async () =>{
        const prods = await api.getProducts(activeCategory, activePage, activeSearch);

        if(prods.error == ''){
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
        }
    }

    const handleProductClick = (data) =>{
        setModalData(data);
        setModalStatus(true);
    }

    // FIM - Pegar os produtos que estão na base através da API, pasando também os filtros se necessários

    // INICIO - Responsável por usar API para buscar as categorias cadastradas
    useEffect(() =>{
        const getCategories = async () =>{
            const cat =  await api.getCategories();        
            
            if(cat.error == ''){
                setCategories(cat.result);
            }
            ReactTooltip.rebuild();
        }
        getCategories();
    }, []); 
    // FIM - Responsável por usar API para buscar as categorias cadastradas

    // INICIO - Fica observando se os campos das categorias, filtro ou a paginação estão sendo clicado se sim ele zera o array com as informações do produtos e coloca novamento
    useEffect(() => {
        setProducts([]);
        getProducts();
    }, [activeCategory, activePage, activeSearch]);
    // FIM - Fica observando se os campos das categorias, filtro ou a paginação estão sendo clicado se sim ele zera o array com as informações do produtos e coloca novamento

    //INICIO Faz o controle para quando clicar em alguma categoria vai apagar o que estiver no filtro e fecha-lo
    useEffect(() => {
        setActiveSearch('');
        setHeaderSearch('');
    }, [activeCategory]);
    //FIM Faz o controle para quando clicar em alguma categoria vai apagar o que estiver no filtro e fecha-lo

    // INICIO - Toda fez que o usuário fizer uma pesquisa tem um tempo de 2 segundos para fazer a requisição, assim só vamos fazer uma requisição por vez
    useEffect(() =>{
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() =>{
            setActiveSearch(headerSearch);
        }, 2000);
    },[headerSearch]);
    // FIM - Toda fez que o usuário fizer uma pesquisa tem um tempo de 2 segundos para fazer a requisição, assim só vamos fazer uma requisição por vez



    return (
        <Container>
            <Header  closeSearch= 'off' search={headerSearch} onSearch={setHeaderSearch}/>

            {categories.length > 0 &&
                <CategoryArea>
                    Selecione as Categorias
                    <CategoryList>
                        <CategoryItem 
                            data = {{
                                id:0,
                                name:'Todas as categorias',
                                image:'/assets/food-and-restaurant.png'
                            }}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />

                        {categories.map((item, index) =>(
                            <CategoryItem 
                                key = {index}
                                data = {item}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}
                        

                    </CategoryList>
                </CategoryArea>
            }
            {products.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {products.map((item, index) =>(
                            <ProductItem 
                                key={index}
                                data={item}
                                onClick={handleProductClick}
                            />               
                        ))}
                    </ProductList>
                </ProductArea>
            }

            {/*INICIO Conteúdo responsável pela paginação da pagina */}
            {totalPages > 0 &&
                <ProductPaginationArea>
                        {Array(totalPages).fill(0).map((item, index) =>(
                            <ProductPaginationItem 
                                key={index} 
                                active={activePage}
                                current={index + 1}
                                onClick={() => setActivePage(index + 1)}
                            >
                                {index + 1}
                            </ProductPaginationItem>
                        ))}
                </ProductPaginationArea>
            }
            {/*FIM Conteúdo responsável pela paginação da pagina */}

            <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalProduct data={modalData} setStatus={setModalStatus}/>
                    
            </Modal>

        </Container>
    );
}