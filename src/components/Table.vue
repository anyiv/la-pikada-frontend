<template>
    <section>
        <b-table
            :data="data"
            :columns="columns"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :default-sort-direction="defaultSortDirection"
            :pagination-rounded="isPaginationRounded"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            default-sort="user.first_name"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
            :page-input="hasInput"
            :pagination-order="paginationOrder"
            :page-input-position="inputPosition"
            :debounce-page-input="inputDebounce"
            >
        </b-table>
    </section>
</template>

<script>

export default {
    name: 'TheTable',
    props: [],
    data() {
        return {
            data: [
                { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27' },
                { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53'},
                { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28' },
                { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46' },
                { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38' }
            ],
            columns: [
                {
                    field: 'id',
                    label: 'ID',
                    width: '100',
                        numeric: true,
                        searchable: true,
                    },
                    {
                        field: 'first_name',
                        label: 'First Name',
                        searchable: true,
                    },
                    {
                        field: 'last_name',
                        label: 'Last Name',
                        searchable: true,
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        searchable: true,
                        centered: true
                    }
                ],
                isPaginated: true,
                isPaginationSimple: false,
                isPaginationRounded: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 5,
                hasInput: false,
                paginationOrder: '',
                inputPosition: '',
                inputDebounce: ''
            }
        }
}
</script>

<style>

</style>